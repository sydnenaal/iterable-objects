export function keys(): Array<string> {
  return Object.keys(this);
}

export function values(): Array<any> {
  return Object.values(this);
}

export function toObject(): Object {
  return { ...this };
}
