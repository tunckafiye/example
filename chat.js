var server = require('http').createServer(handler);
var io = require('socket.io')(server);
//var mysql = require('mysql');
//var xss = require('xss');
var port = Number(process.env.PORT || 3000);


var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { colorize: true, timestamp: true });
logger.info('SocketIO > listening on port ' + port);

server.listen(port, function(){
  console.log('listening on *:'+port);
});

function handler (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to socket.io!');
}

//var usernames={};
io.on('connection', function (socket) {
	//io.set("transports", ["xhr-polling"]);
	//io.set("polling duration", 10);
	//var kr = io.sockets.adapter.rooms[socket.room];
	//console.log(Object.keys(kr).length+' TANE ODA VARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
	console.log(Object.keys(io.sockets.adapter.rooms).length+' kişi var sistemde');
	console.log();
	logger.info('SocketIO > Connected socket ' + socket.id);
	//console.log(io.sockets.connected);
	io.emit('myid','herokuapp -- '+socket.id+' ');
	
	
	
	socket.on('disconnect',function(){
		console.log(socket.id + ' CIKTI! ');
	});
});
