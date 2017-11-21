var Rx = require('rxjs/Rx');

const amountTexBox = document.querySelector('#amount');
const warningMessage = document.querySelector('#amount-warning');

Rx.Observable.fromEvent(amountTexBox, 'keyup')
    .bufferCount(5)
    .map(e => e[0].target.value)
    .map(v => parseInt(v, 10))
    .filter(v => !Number.isNaN(v))
    .subscribe(amount => {
        warningMessage.setAttribute('style', 'display: inline;')
    })