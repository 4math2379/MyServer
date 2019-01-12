import http from 'http';
import { Observable, Subject, ReplaySubject, from, of, range, Rx, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { JSDOM } from "jsdom";
var $ = require("jquery")(new JSDOM().window);






http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello {{johnniy}}');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');



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