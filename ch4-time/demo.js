var Rx = require('rxjs/Rx');
Rx.Observable.of(1, 2, 3, 4, 5)
    .do(x => console.log(`Emitted: ${x}`))
    .delay(2000)
    .subscribe(x => console.log(`Received: ${x}`));