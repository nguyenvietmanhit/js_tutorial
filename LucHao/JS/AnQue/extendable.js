var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Extendable = function () {
  function Extendable() {
    _classCallCheck(this, Extendable);

    this.extensions = Object.create(null);
  }

  _createClass(Extendable, [{
    key: "extend",
    value: function extend(extensionPoint, detector, serialiser, deserialiser) {
      this.extensions[extensionPoint] = { detector: detector, serialiser: serialiser, deserialiser: deserialiser };
    }
  }]);

  return Extendable;
}();

export default Extendable;
