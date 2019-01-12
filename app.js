
var cors = require('cors');
var bodyParser= require('body-parser');



var Rx = require('rxjs/Rx')

Rx.Observable.of(1,2,3);


var observable = Rx.Observable.create( observer => {

})

//clustering to create a small network


//var cluster = require('cluster');
















//if (cluster.isMaster)  {
//machine cpu
//var cpuCount = require('os').cpus().length;

//worker 

// for (var i = 0; i <  cpuCount; i +=1) {
// 	cluster.fork();
// }



// } else {

	var express = require('express');

	var app = express()
	//var port = 3000;



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
	
	//characters.push(character.id, character.name, character.class,character.subclass);
	 res.setHeader('content-type', 'application/json; charset=utf-8')
	
	
		return res.send('Character has been added successfully');
	});


app.listen(3000);
console.log(" server running ")//, cluster.worker.id);


//}













