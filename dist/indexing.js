'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _rxjs = require('rxjs');

var _operators = require('rxjs/operators');

var _jsdom = require('jsdom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require("jquery")(new _jsdom.JSDOM().window);

_http2.default.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello {{johnniy}}');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

var observable = _rxjs.Rx.Observable.fromEvent($('#input'), 'keyup');
(0, _operators.map)(function (e) {
    return e.target.value;
});

(0, _operators.map)(function (value) {
    var p = $.get('http://localhost:3000/api/perso/?=' + encodeURIComponent('Skids')).promise();
    return _rxjs.Observable.fromPromise(p);
});

//subscribe console
observable.subscribe(function (nb) {
    console.log(nb);
}, function (err) {
    console.log('error');
}, function (completed) {
    console.log('done ! ');
});