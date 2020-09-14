import { ForEachCallback } from "../types";

export function forEach(callback: ForEachCallback): void {
  if (!Object.keys(this)) {
    return;
  }

  for (let i in this) {
    callback(i, this[i], this);
  }
}
