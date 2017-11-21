var Rx = require('rxjs/Rx');

const sub = Rx.Observable.timer(1000)
// sub.subscribe(() =>
//     document.querySelector('#panel')
//     .style.backgroundColor = 'red');

sub.subscribe(console.log)

setTimeout(() => {
    sub.subscribe(console.log)
}, 4000);