var Rx = require('rxjs/Rx');

const field = document.querySelector('.form-field');
const showHistoryButton = document.querySelector('#show-history')
const historyPanel = document.querySelector('#history ');

const showhistory$ = Rx.Observable.fromEvent(showHistoryButton, 'click');

Rx.Observable.fromEvent(field, 'keyup')
    .debounceTime(200)
    .pluck('target', 'value')
    .bufferWhen(() => showhistory$)
    .do(history => history.pop())
    .subscribe(history => {
        let contents = '';
        if (history.length > 0) {
            for (const item of history) {
                contents += '<li>' + item + '</li>'
            }
            historyPanel.innerHTML = contents;
        }
    })