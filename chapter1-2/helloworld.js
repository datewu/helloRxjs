var Rx = require('rxjs/Rx');

let subjuect = Rx.Observable.of(3, 9, 4, 65)
subjuect.subscribe(
    (d) => {
        console.log(d * d)
    }
)
console.log('another one')

subjuect.subscribe(
    console.log
)