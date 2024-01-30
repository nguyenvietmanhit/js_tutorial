var _createClass = (function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
})();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	}
	return call && (typeof call === "object" || typeof call === "function")
		? call
		: self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError(
			"Super expression must either be null or a function, not " +
				typeof superClass
		);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true,
		},
	});
	if (superClass)
		Object.setPrototypeOf
			? Object.setPrototypeOf(subClass, superClass)
			: (subClass.__proto__ = superClass);
}

/* global Uint8Array */

import tags from "./type-tags.js";
import Extendable from "./extendable.js";

/*
todo:
mapl, bmapl
timestamp
extension
factor out various common threads
*/

var Decoder = (function (_Extendable) {
	_inherits(Decoder, _Extendable);

	function Decoder() {
		_classCallCheck(this, Decoder);

		var _this = _possibleConstructorReturn(
			this,
			(Decoder.__proto__ || Object.getPrototypeOf(Decoder)).call(this)
		);

		_this.strings = [];
		_this.keysets = [];
		_this.buffer = [];
		_this.ptr = 0;
		return _this;
	}

	_createClass(
		Decoder,
		[
			{
				key: "decode",
				value: function decode(buffer) {
					var options =
						arguments.length <= 1 || arguments[1] === undefined
							? {}
							: arguments[1];

					this.buffer = buffer;
					if (buffer[0] === tags.STRLUT) {
						this.strings = this.decodeValue();
						this.keysets = this.decodeValue();
					}
					if (options.omittedKeysets != null) {
						var k = [];
						[].push.apply(k, options.omittedKeysets);
						[].push.apply(k, this.keysets);
						this.keysets = k;
					}
					return this.decodeValue();
				},
			},
			{
				key: "readUInt32",
				value: function readUInt32() {
					return (
						this.buffer[this.ptr++] * 0x1000000 +
						((this.buffer[this.ptr++] << 16) |
							(this.buffer[this.ptr++] << 8) |
							this.buffer[this.ptr++])
					);
				},
			},
			{
				key: "readFloat",
				value: function readFloat(eBits, mBits) {
					var bias = (1 << (eBits - 1)) - 1;
					var byteLength = (eBits + mBits + 1) / 8;

					var bytes = this.buffer.slice(this.ptr, this.ptr + byteLength);
					this.ptr += byteLength;

					// read sign, exponent, and beginning of mantissa from first two bytes
					var sign = bytes[0] >>> 7 > 0 ? -1 : 1;
					var leadingBytes = (bytes[0] << 8) | bytes[1];
					var leadingMBits = 16 - (eBits + 1);
					var exp = (leadingBytes >>> leadingMBits) & ((1 << eBits) - 1);
					var mantissa = leadingBytes & ((1 << leadingMBits) - 1);

					// read remainder of mantissa
					for (var i = 2; i < byteLength; ++i) {
						mantissa = mantissa * 256 + bytes[i];
					}

					if (exp === (1 << eBits) - 1) {
						// NaN and +/- Infinity
						return (mantissa === 0 ? sign : 0) / 0;
					} else if (exp > 0) {
						// normal
						return (
							sign *
							Math.pow(2, exp - bias) *
							(1 + mantissa / Math.pow(2, mBits))
						);
					} else if (mantissa !== 0) {
						// subnormal
						return (
							sign * Math.pow(2, -(bias - 1)) * (mantissa / Math.pow(2, mBits))
						);
					}
					return sign * 0;
				},
			},
			{
				key: "readString",
				value: function readString(length) {
					var str = "";
					for (var i = 0; i < length; ++i) {
						str += String.fromCharCode(this.buffer[this.ptr++]);
					}
					return decodeURIComponent(escape(str));
				},
			},
			{
				key: "readArray",
				value: function readArray(length) {
					var out = [];
					for (var i = 0; i < length; ++i) {
						out.push(this.decodeValue());
					}
					return out;
				},
			},
			{
				key: "readBooleanArray",
				value: function readBooleanArray(length) {
					var out = [];
					for (var i = 0; i < length; ++i) {
						out[i] = (this.buffer[this.ptr + (i >> 3)] & (0x80 >> i % 8)) > 0;
					}
					this.ptr += (length >> 3) + (length % 8 !== 0);
					return out;
				},

				// todo: factor out "read type_ length value"
				// readUInt() { ... }
			},
			{
				key: "decodeValue",
				value: function decodeValue() {
					var _this2 = this;

					var type = this.buffer[this.ptr++];
					if (type < tags.UINT14_BASE) {
						return type;
					} else if (type < tags.NINT4_BASE) {
						return ((type ^ tags.UINT14_BASE) << 8) | this.buffer[this.ptr++];
					} else if (type < tags.BARRAY4_BASE) {
						return -(type ^ tags.NINT4_BASE);
					} else if (type < tags.ARRAY5_BASE) {
						return this.readBooleanArray(type ^ tags.BARRAY4_BASE);
					} else if (type < tags.STR5_BASE) {
						return this.readArray(type ^ tags.ARRAY5_BASE);
					} else if (type < tags.FALSE) {
						return this.readString(type ^ tags.STR5_BASE);
					}
					switch (type) {
						case tags.FALSE:
							return false;
						case tags.TRUE:
							return true;
						case tags.NULL:
							return null;
						case tags.UNDEFINED:
							return void 0;
						case tags.UINT16:
							return (this.buffer[this.ptr++] << 8) | this.buffer[this.ptr++];
						case tags.UINT24:
							return (
								(this.buffer[this.ptr++] << 16) |
								(this.buffer[this.ptr++] << 8) |
								this.buffer[this.ptr++]
							);
						case tags.UINT32:
							return this.readUInt32();
						case tags.UINT64:
							return this.readUInt32() * 0x100000000 + this.readUInt32();
						case tags.NINT8:
							return -this.buffer[this.ptr++];
						case tags.NINT16:
							return -(
								(this.buffer[this.ptr++] << 8) |
								this.buffer[this.ptr++]
							);
						case tags.NINT32:
							return -this.readUInt32();
						case tags.NINT64:
							return -(this.readUInt32() * 0x100000000 + this.readUInt32());
						case tags.FLOAT32:
							return this.readFloat(8, 23);
						case tags.DOUBLE64:
							return this.readFloat(11, 52);

						case tags.TIMESTAMP:
							return new Date(
								(this.buffer[this.ptr] & 0x80) > 0
									? -(
											(~(
												(this.buffer[this.ptr++] << 16) |
												(this.buffer[this.ptr++] << 8) |
												this.buffer[this.ptr++]
											) &
												0xffffff) *
												0x1000000 +
											(~(
												(this.buffer[this.ptr++] << 16) |
												(this.buffer[this.ptr++] << 8) |
												this.buffer[this.ptr++]
											) &
												0xffffff) +
											1
									  )
									: ((this.buffer[this.ptr++] << 16) |
											(this.buffer[this.ptr++] << 8) |
											this.buffer[this.ptr++]) *
											0x1000000 +
									  ((this.buffer[this.ptr++] << 16) |
											(this.buffer[this.ptr++] << 8) |
											this.buffer[this.ptr++])
							);

						case tags.BINARY_: {
							var length = this.decodeValue();
							// alternative to Uint8Array.from(...) for old browsers
							var out = new Uint8Array(length);
							for (var i = 0; i < length; ++i) {
								out[i] = this.buffer[this.ptr + i];
							}
							this.ptr += length;
							return out.buffer;
						}

						case tags.CSTRING: {
							var str = "";
							while (this.buffer[this.ptr] !== 0) {
								str += String.fromCharCode(this.buffer[this.ptr++]);
							}
							this.ptr++;
							return decodeURIComponent(escape(str));
						}
						case tags.STR8:
							return this.readString(this.buffer[this.ptr++]);
						case tags.STR_:
							return this.readString(this.decodeValue());
						case tags.STRREF:
							return this.strings[this.buffer[this.ptr++]];

						case tags.ARRAY8:
						case tags.STRLUT:
							return this.readArray(this.buffer[this.ptr++]);
						case tags.ARRAY_:
							return this.readArray(this.decodeValue());

						case tags.BARRAY8:
							return this.readBooleanArray(this.buffer[this.ptr++]);
						case tags.BARRAY_:
							return this.readBooleanArray(this.decodeValue());

						case tags.MAP_: {
							var _ret = (function () {
								var out = {};
								var keysetIndex = _this2.decodeValue();
								var keys = _this2.keysets[keysetIndex];
								keys.forEach(function (key) {
									out[key] = _this2.decodeValue();
								});
								return {
									v: out,
								};
							})();

							if (typeof _ret === "object") return _ret.v;
						}

						case tags.BMAP_: {
							var _out = {};
							var _keysetIndex = this.decodeValue();
							var _keys = this.keysets[_keysetIndex];
							var bools = this.readBooleanArray(_keys.length);
							for (var _i = 0; _i < _keys.length; ++_i) {
								_out[_keys[_i]] = bools[_i];
							}
							return _out;
						}

						case tags.EXTENSION: {
							var ext = this.decodeValue();
							return this.extensions[ext].deserialiser(this.decodeValue());
						}

						default:
							// This should never happen.
							throw new Error("Unknown case");
					}
				},
			},
		],
		[
			{
				key: "decode",
				value: function decode(buffer) {
					var options =
						arguments.length <= 1 || arguments[1] === undefined
							? {}
							: arguments[1];

					var d = new Decoder();
					var extensions = options.extensions;
					if (extensions != null) {
						// $FlowFixMe: flow doesn't understand that ext is an ExtensionPoint
						Object.keys(extensions).forEach(function (ext) {
							var extension = extensions[ext];
							d.extend(
								ext,
								extension.detector,
								extension.serialiser,
								extension.deserialiser
							);
						});
					}
					return d.decode(buffer, options);
				},
			},
		]
	);

	return Decoder;
})(Extendable);

export default Decoder;

export var decode = Decoder.decode;
