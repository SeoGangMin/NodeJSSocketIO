var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

http.listen(3001, function(){

  console.log('listening on *:3001');

});



io.sockets.on('connection', function(socket){

  socket.on('command1', function( msg ){

    socket.emit('receive_command1', {msg : msg});
  });


  socket.on('command2', function( msg ){

    socket.emit('receive_command2', {msg : msg});
  });



});
