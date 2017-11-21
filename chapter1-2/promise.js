var Rx = require('rxjs/Rx');

const computerFutureValue = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lol');
    }, 5000);
})

const computerFutureValueFailer = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('dota');
    }, 5000);
})

Rx.Observable.fromPromise(computerFutureValue)
    .subscribe(
        console.log,
        e => {
            console.log('error' + e)
        },
        () => {
            console.log('all done!')
        }
    )

Rx.Observable.fromPromise(computerFutureValueFailer)
    .subscribe(
        console.log,
        e => {
            console.log('error' + e)
        },
        () => {
            console.log('all done!')
        }
    )