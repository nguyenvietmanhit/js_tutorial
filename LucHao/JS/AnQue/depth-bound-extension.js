

export var depthBoundReached = {};

export var extension = {
  detector: function () {
    return false;
  },
  serialiser: function () {
    throw new Error('serialisation is hard-coded into the encoder');
  },
  deserialiser: function () {
    return depthBoundReached;
  }
};