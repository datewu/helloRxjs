/*jshint esversion: 6 */
const Rx = require('rxjs/Rx');

class DisposableResource {
    constructor(value) {
        this.value = value;
        this.disposed = false;
    }

    getValue() {
        if (this.disposed) {
            throw new Error('Object is disposed');
        }
        return this.value;
    }

    unsubscribe() {
        if (!this.disposed) {
            this.disposed = true;
            this.value = null;
        }
        console.log('Dispoded');
    }
}

const source$ = Rx.Observable.using(
    () => new DisposableResource(998),
    resource => Rx.Observable.interval(1000)
);

const subscription = source$.subscribe(
    next => console.log(`Next: ${next}`),
    err => console.log(`Error: ${err}`),
    () => console.log(`Completed`)
);

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);