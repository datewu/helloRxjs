var Rx = require('rxjs/Rx');

const password = document.getElementById('password-field');
const submit = document.getElementById('submit');
const outputField = document.getElementById('output');


const password$ = Rx.Observable.fromEvent(password, 'keyup')
    .map(({
        keyCode
    }) => keyCode - 48)
    .filter(v => 0 <= v && v <= 9);

const submit$ = Rx.Observable.fromEvent(submit, 'click');

Rx.Observable.combineLatest(
        password$
        .bufferTime(7000), submit$
    )
    .take(10)
    .subscribe(
        ([maybePassword]) => {
            if (maybePassword.join('') === '1234') {
                outputField.innerHTML = 'Correct Password!';
            } else {
                outputField.innerHTML = 'Wrong Password!';

            }
        },
        err => {},
        () => outputField.innerHTML = 'No more tries accepted!'
    );