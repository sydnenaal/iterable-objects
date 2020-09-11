function forEach(callback) {
  if (!Object.keys(this)) {
    return {};
  }

  if (!callback) {
    const message = "Callback is undefined";

    throw new Error(message);
  }

  for (let i in this) {
    const params = {
      key: i,
      value: this[i],
      object: this,
    };

    callback(params);
  }
}

function map(callback) {
  if (!Object.keys(this)) {
    return {};
  }

  if (!callback) {
    const message = "Callback is undefined";

    throw new Error(message);
  }

  let newObject = {};

  for (let i in this) {
    const params = { key: i, value: this[i], object: this };

    newObject[i] = callback(params);
  }

  return new IterableObject(newObject);
}

function filter(callback) {
  if (!Object.keys(this)) {
    return {};
  }

  if (!callback) {
    const message = "Callback is undefined";

    throw new Error(message);
  }

  let newObject = {};

  for (let i in this) {
    const params = { key: i, value: this[i], object: this };
    const valid = callback(params);

    if (valid) {
      newObject[i] = this[i];
    }
  }

  return new IterableObject(newObject);
}

function keys() {
  return Object.keys(this);
}

function values() {
  return Object.keys(this);
}

function toObject() {
  return { ...this };
}

class IterableObject {
  constructor(object) {
    if (typeof object !== "object") {
      const message = "Your object is not object";

      throw new Error(message);
    }

    const proto = {};

    Object.defineProperties(proto, {
      map: { value: map.bind(object) },
      forEach: { value: forEach.bind(object) },
      filter: { value: filter.bind(object) },
      keys: { get: keys.bind(object) },
      values: { get: values.bind(object) },
      toObject: { value: toObject.bind(object) },
    });

    this.__proto__ = Object.create(proto).__proto__;

    for (let i in object) {
      this[i] = object[i];
    }

    return this;
  }
}

module.exports = {
  IterableObject,
};
