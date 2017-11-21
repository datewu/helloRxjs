var Rx = require('rxjs/Rx');

const source$ = Rx.Observable.create(x => {
    let i = 0;
    setInterval(() => {
        x.next(i++)
    }, 400)
})

let s = source$.subscribe(console.log)
//s.unsubscribe();

setTimeout(() => {
    source$.subscribe(e => {
        console.log(e, 'later 5s')
    })
}, 3000);