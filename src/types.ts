export type FilterCB = (key: string, value: any, object: Object) => boolean;

export type ForEachCB = (key: string, value: any, object: Object) => void;

export type MapCB = (key: string, value: any, object: Object) => any;

export interface Iterable {
  [key: string]: any;
}
