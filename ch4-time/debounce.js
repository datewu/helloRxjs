//var Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(document, 'click')
    .debounceTime(1000)
    .subscribe(c => {
        console.log(`Clicked at position ${c.clientX} and ${c.clientY}`)
    });