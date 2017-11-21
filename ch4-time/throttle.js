//var Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(document, 'mousemove')
    .throttleTime(1000)
    .subscribe(c => {
        console.log(`Mouse at: ${c.clientX} and ${c.clientY}`)
    });