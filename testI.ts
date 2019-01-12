

const { Observable, Subject, ReplaySubject, from, of, range, Rx, fromEvent } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');
var jsdom = require("jsdom");
var input = $('#input')(new jsdom.JSDOM().window)
;

var source = Rx.Observable.fromEvent(input, 'click');

var subscription = source.subscribe(
    function (x) {
        console.log('Next: Clicked!');
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

input.trigger('click');

// => Next: Clicked!