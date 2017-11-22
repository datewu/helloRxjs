/*jshint esversion: 6 */
const Rx = require('rxjs/Rx');


const interval$ = Rx.Observable.interval(1000);
const click = Rx.Observable.fromEvent(document, 'click');

interval$.takeUntil(click$)
    .subscribe(
        x => console.log(x),
        err => console.log(`Error: ${err} `),
        () => console.log('ok, user is back!'));