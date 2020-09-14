import { map, filter, forEach } from "./methods";
import { Iterable } from "./types";

const props: PropertyDescriptorMap = {
  map: { value: map },
  filter: { value: filter },
  forEach: { value: forEach },
};
export class IterableObject {
  [key: string]: any;

  constructor(object: Iterable) {
    for (let i in object) {
      this[i] = object[i];
    }

    return this;
  }

  get keys(): Array<string> {
    return Object.keys(this);
  }

  get values(): Array<any> {
    return Object.values(this);
  }

  get toObject(): Object {
    return { ...this };
  }
}

Object.defineProperties(IterableObject.prototype, props);
