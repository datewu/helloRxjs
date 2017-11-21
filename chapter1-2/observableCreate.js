var Rx = require('rxjs/Rx');

const source$ = Rx.Observable.create(x => {
    x.next('lol');
    x.next('doat');
    x.next('cs');
    x.next('cf');
    x.next('cdnf');
    x.complete();
    x.next('cj');
});

const subscription = source$.subscribe(console.log)
source$.subscribe(console.log)