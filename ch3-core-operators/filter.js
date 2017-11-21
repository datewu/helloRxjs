var Rx = require('rxjs/Rx');

const isNumbercalKeyCode = c => c >= 48 && c <= 57;
const input = document.querySelector('#input')

Rx.Observable.fromEvent(input, 'keyup')
    .pluck('keyCode')
    .filter(isNumbercalKeyCode)
    .subscribe(c => console.log('user typed:', c));