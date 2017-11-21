var Rx = require('rxjs/Rx');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(998);
    }, 1000);
})

p.then(v => {
    console.log('in the then():', v)
})

const sub$ = Rx.Observable.fromPromise(p)

subscription = sub$.subscribe(v => {
    console.log('in the subscribe():', v)
})

subscription.unsubscribe();