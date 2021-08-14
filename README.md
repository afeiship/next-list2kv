# next-list2kv
> Transform pure list to key value pairs.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-list2kv
```

## usage
```js
import '@jswork/next-list2kv';

const list1 = ['a', 'b', 'c'];
const res1 = nx.list2kv(list1);
const res2 = nx.list2kv(list1, { indexable: true });
const res3 = nx.list2kv(list1, { label: 'title', id: 'value' });


/*
// res1
[
  { label: 'a', value: 'a' },
  { label: 'b', value: 'b' },
  { label: 'c', value: 'c' }
]

// res2
[
  { label: 'a', value: 0 },
  { label: 'b', value: 1 },
  { label: 'c', value: 2 }
]

// res3
[
  { title: 'a', id: 'a' },
  { title: 'b', id: 'b' },
  { title: 'c', id: 'c' }
]
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-list2kv/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-list2kv
[version-url]: https://npmjs.org/package/@jswork/next-list2kv

[license-image]: https://img.shields.io/npm/l/@jswork/next-list2kv
[license-url]: https://github.com/afeiship/next-list2kv/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-list2kv
[size-url]: https://github.com/afeiship/next-list2kv/blob/master/dist/next-list2kv.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-list2kv
[download-url]: https://www.npmjs.com/package/@jswork/next-list2kv
