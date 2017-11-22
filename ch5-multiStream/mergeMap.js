/*jshint esversion: 6 */
const Rx = require('rxjs/Rx');
const ajax = url => new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status == 200) {
            let data = req.responseText;
            resolve(data);
        } else {
            reject(new Error(req.statusText));
        }
    };
    req.onerror = function () {
        reject(new Error('IO Error'));
    };
    req.send();
});


const csv = s => s.split(/,\s*/);
const webservice = `http://download.finance.yahoo.com/d/quotes.csv?s=$symbol&f=sa&e=.csv`;

const requestQuote$ = symbol =>
    Rx.Observable.fromPromise(
        ajax(webservice.replace(/\$symbol/, symbol)))
    .map(response => response.replace(/"/g, ''))
    .map(csv);

const twoSecond$ = Rx.Observable.interval(2000);


const fetchDataInterval$ = symbol => twoSecond$
    .mergeMap(() => requestQuote$(symbol));


const symbols$ = Rx.Observable.of('FB', 'CTXS', 'AAPL');
const ticks$ = symbols$.mergeMap(fetchDataInterval$);


ticks$.subscribe(
    ([symbol, price]) =>
    console.log(symbol, price)
);