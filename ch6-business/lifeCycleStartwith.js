/*jshint esversion: 6 */
const Rx = require('rxjs/Rx');

Rx.Observable.range(2, 7)
    .startWith(0)
    .subscribe(console.log);


/* simple implemention of startWith */

/*
function startWith(value) {
    return Rx.Observable.create(x => {
        let source = this;
        try {
            x.next(value);
        } catch (err) {
            x.error(err);
        }
        return source.subscribe(x);
    });

}
Rx.Observable.prototype.startWith = startWith;
*/