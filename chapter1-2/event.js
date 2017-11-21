
const Rx = require('rxjs/Rx');
const EventEmitter = require('events')

const addEventEmitter = new EventEmitter();

const event = addEventEmitter.on('add', (a, b) => {
    console.log('event add', a + b);
});

const subject = Rx.Observable.fromEvent(addEventEmitter, 'add', (a, b) => ({ a: a, b: b }))
    .map(input => input.a * input.b)
console.log('subscribed')
subject.subscribe(console.log)

console.log('emit')
addEventEmitter.emit('add', 998, 9943)

