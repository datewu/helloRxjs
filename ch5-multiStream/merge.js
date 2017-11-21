/*jshint esversion: 6 */
var Rx = require('rxjs/Rx');

const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');
const touchEnd$ = Rx.Observable.fromEvent(document, 'touched');

const conformantMouseUp$ = mouseUp$.map(e => ({
    left: e.clientX,
    top: e.clientY
}));

const conformantTouchEnd$ = touchEnd$.map(e => ({
    left: e.changedTouches[0].clientX,
    top: e.changedTouches[0].clientY
}));


Rx.Observable.merge(conformantMouseUp$, conformantTouchEnd$)
    .subscribe(o =>
        console.log(`Left: ${o.left}, Top: ${o.top} `));