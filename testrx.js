

const { Observable, Subject, ReplaySubject, from, of, range, Rx, fromEvent } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');

var EventEmitter = require('events').EventEmitter

var eventEmitter = new EventEmitter();

var source = Rx.Observable.fromEvent(
    eventEmitter,
    'data', 
    function (args) {
        return { foo: args[0], bar: args[1] };
    });

var subscription = source.subscribe(
    function (x) {
        console.log('Next: foo -') + x.foo + (', bar -') + x.bar;
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

eventEmitter.emit('data', 'baz', 'quux');
// => Next: foo - baz, bar - quux