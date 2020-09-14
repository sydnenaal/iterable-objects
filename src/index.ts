import { forEach, map, filter, keys, values, toObject } from "./methods";
import { Iterable } from "./types";

export class IterableObject {
  [key: string]: any;

  constructor(object: Iterable) {
    const methods: PropertyDescriptorMap = {
      map: { value: map.bind(object) },
      forEach: { value: forEach.bind(object) },
      filter: { value: filter.bind(object) },
      keys: { get: keys.bind(object) },
      values: { get: values.bind(object) },
      toObject: { value: toObject.bind(object) },
    };

    const proto = Object.defineProperties({}, methods);

    IterableObject.prototype = proto;

    for (let i in object) {
      this[i] = object[i];
    }

    return this;
  }
}
