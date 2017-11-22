/*jshint esversion: 6 */
var Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(document, 'click')
    .map(click => Rx.Observable.range(1, 5))
    .switch()
    .subscribe(console.log);