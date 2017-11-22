/*jshint esversion: 6 */
const Rx = require('rxjs/Rx');

Rx.Observable.of('a', 'b', 'b', 'c', 'a')
    .distinctUntilChanged()
    .subscribe(console.log);