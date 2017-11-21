var Rx = require('rxjs/Rx');

const progressBar$ = Rx.Observable.create(x => {
    const OFFSET = 3000;
    const SPEED = 50;

    let v = 0;

    function progress() {
        if (++v <= 100) {
            x.next(v);
            setTimeout(progress, SPEED);
        } else {
            x.complete();
        }
    };
    setTimeout(progress, OFFSET);
})

progressBar$.subscribe(console.log)