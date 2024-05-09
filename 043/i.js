const arr = [];

arr.push('bla bla');
arr.push('zuikis');
arr.push('barsukas');

console.log(arr);

const map = new Map();

map.set('b', 'bla bla');
map.set('zuik', 'zuikis');
map.set(101, 'barsukas');
map.set(_ => _, 'funkcinis barsukas');

// map.delete('zuik');

console.log(map, map.get(101), map.has('b'), map.size);

map.forEach((v, i) => console.log(i, v));

const arrFromMap = [...map];

console.log(arrFromMap);

const map2 = new Map(arrFromMap);

console.log(map2);

const set = new Set();

set.add('bla bla');
set.add('zuikis');
set.add('barsukas');

set.add('zuikis');
set.add('barsukas');

set.has('zuikis');

console.log(set, set.has('zuikis'));