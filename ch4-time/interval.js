var Rx = require('rxjs/Rx');

const sub$ = Rx.Observable.create(x => {
    let num = 0;
    const id = setInterval(() => {
        x.next(`Next ${num++}`);
    }, 2000);
    return () => {
        clearInterval(id);
        x.complete();
    };
})

const subscription = sub$.subscribe(
    next => console.log(next),
    error => console.log(error.message),
    () => console.log('done')
);

setTimeout(() => subscription.unsubscribe(), 8000)