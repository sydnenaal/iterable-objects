## Iterable objects

Make your objects iterable simplify and conveniently

## Install

```
$ npm i --save iterable-objects
```

or if you use yarn:

```
$ yarn add iterable-objects
```

## Usage

``` js
const object = { a: 1, b: 2, c: 3, d: 4 };
const iterable = new IterableObject(object);

const parsedIterable = iterable
  .filter(({ key }) => key > "a") //{b: 2, c: 3, d: 4}
  .map(({ key, value }) => (key > "b" ? value + 1 : value)) //{b: 2, c: 4, d: 5}
  .values;  //[2, 4, 5]
```

## Licence

MIT © Erokhin Dmitriy
