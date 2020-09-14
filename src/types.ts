export type FilterCallback = (
  key: string,
  value: any,
  object: Object
) => boolean;

export type ForEachCallback = (key: string, value: any, object: Object) => void;

export type MapCallback = (key: string, value: any, object: Object) => any;

export interface Iterable {
  [key: string]: any;
}
