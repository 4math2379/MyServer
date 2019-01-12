
import { Observable, Subject, ReplaySubject, from, of, range, Rx, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { JSDOM } from "jsdom";
var $ = require("jquery")(new JSDOM().window);


var observable = Rx.Observable.fromEvent($('#input'), 'keyup')
map(e => e.target.value);

map(value => {
    var p =  $.get('http://localhost:3000/api/perso/?=' + encodeURIComponent ('Skids')).promise();
    return Observable.fromPromise(p)
   
})


//subscribe console
observable.subscribe(nb => {
    console.log(nb)

}, err => {
    console.log('error')
}, completed => {
    console.log('done ! ');
}); 