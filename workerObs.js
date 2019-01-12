
var Rx = require('rxjs/Rx')

Rx.Observable.of(1,2,3);


var myObservable = Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
  });
  myObservable.subscribe(value => console.log(value));