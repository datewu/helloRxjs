var Rx = require('rxjs/Rx');

const progressBar$ = Rx.Observable.create(x => {
    const OFFSET = 1000;
    const SPEED = 200;

    let v = 0;

    function progress() {
        if (++v <= 20) {
            x.next(v);
            setTimeout(progress, SPEED);
        } else {
            x.complete();
        }
    };
    timeoutId = setTimeout(progress, OFFSET);
    return () => {
        clearTimeout(timeoutId)
    }
})

let s = progressBar$.subscribe(console.log)
s.unsubscribe()

setTimeout(() => {
    progressBar$.subscribe(e => {
        console.log(e, '2s later')
    })
}, 2000);