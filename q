const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;


//server
//
const server = http.createServer((req, res) => {
res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Server de Rahma\n');




});


server.listen(port, hostname () => {
console.log('server up ma gueule ! ici -> http://{hostname}:${port}/');

});
