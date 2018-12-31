var express = require('express');
var cors = require('cors');
var bodyParser= require('body-parser');





const app = express()
const port = 3000;



var characters = [{
	id:1,
	name:"Skids OTools",
	class:"Rogues",
	subclass:"Guardian"
}];



//all routes and use
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
//parse JSON
app.use(bodyParser.json());








app.get('/api/perso',function (req, res)  {
	return res.json(characters);
	res.setHeader('content-type', 'application/json; charset=utf-8')

		
});

app.post('/api/perso', function (req, res) {
    var character = req.body.character;
 characters.push(character);
 res.setHeader('content-type', 'application/json; charset=utf-8')


    return res.send('Character has been added successfully');
});





app.listen(port, function(){
	console.log(`test cards reading on ${port}`)
});

