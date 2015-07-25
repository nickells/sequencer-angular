var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var bodyParser = require('body-parser');

var favicon = require('serve-favicon')
var logger = require('morgan')

var server = http.createServer();
var io = socketio(server);



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// io.on('connection', function(socket){
// 	console.log(socket.id," has connected")

//  	socket.on('disconnect', function() {
//  	console.log(socket.id,' has disconnected');
 
//  	socket.on('error', function(err){
//  		console.log(err)
//  	})
// });





// app.use(logger('dev'))
server.on('request', app);

// app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/scripts'));
// app.use(express.static(__dirname + '/views'));


app.get('/', function (req,res){
	// if (err) console.log(err);
	// res.send("hi")
	res.sendFile(__dirname + '/index.html')
})


server.listen(process.env.PORT || 5000)
