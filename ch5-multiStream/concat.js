/*jshint esversion: 6 */
var Rx = require('rxjs/Rx');

const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');
const touchEnd$ = Rx.Observable.fromEvent(document, 'touched');

Rx.Observable.concat(mouseUp$.take(100), touchEnd$)
    .subscribe(event =>
        console.log(event.type));

/* equal to this nested subscription below
which is a bad/antipattern practice */
mouseUp$.take(100)
    .subscribe(
        function next(event) {
            console.log(event.type);
        },
        function error(e) {
            console.log(e);
        },
        function complete() {
            touchEnd$.subscribe(
                event => console.log(event.type)
            );
        }
    );