/*jshint esversion: 6 */
const Rx = require('rxjs/Rx');


const panel = document.querySelector('#dragTarget');
const mouseDown$ = Rx.Observable.fromEvent(panel, 'mousedown');
const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');
const mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove');

//  Listing 5.8
const drag$ = mouseDown$.concatMap(() => mouseMove$.takeUntil(mouseUp$.filter(() => confirm('Drop widget here?'))));

drag$.forEach(event => {
    panel.style.left = event.clientX + 'px';
    panel.style.top = event.clientY + 'px';
});