import { FilterCB, Iterable } from "../types";
import { IterableObject } from "..";

export function filter(callback: FilterCB): IterableObject {
  if (!Object.keys(this)) {
    return new IterableObject({});
  }

  let newObject: Iterable = {};

  for (let i in this) {
    const valid = callback(i, this[i], this);

    if (valid) {
      newObject[i] = this[i];
    }
  }

  return new IterableObject(newObject);
}
