import { IterableObject } from "../";
import { MapCB, Iterable } from "../types";

export function map(callback: MapCB): IterableObject {
  if (!Object.keys(this)) {
    return new IterableObject({});
  }

  let newObject: Iterable = {};

  for (let i in this) {
    newObject[i] = callback(i, this[i], this);
  }

  return new IterableObject(newObject);
}
