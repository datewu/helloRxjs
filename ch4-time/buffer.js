var Rx = require('rxjs/Rx');

const sub = Rx.Observable.timer(0, 50)
sub.subscribe(console.log);

sub.buffer(Rx.Observable.timer(500)).subscribe(console.log);