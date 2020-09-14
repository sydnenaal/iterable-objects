import { ForEachCB } from "../types";

export function forEach(callback: ForEachCB): void {
  if (!Object.keys(this)) {
    return;
  }

  for (let i in this) {
    callback(i, this[i], this);
  }
}
