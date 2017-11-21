var Rx = require('rxjs/Rx');

const map = new Map();

map.set('key1', 'value3');
map.set('key2', 'value4');
map.set('key3', 'value5');

Rx.Observable.from(map).forEach(console.log)