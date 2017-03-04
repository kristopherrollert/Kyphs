'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

let led = null;
let sens1 = null;
let sens2 = null;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

five.Board().on('ready', function() {
  console.log('Arduino is ready.');


  // Map pins to digital inputs on the board
  led = new five.Led(2);
  var sens1 = new five.Sensor("A0");
  var sens2 = new five.Sensor("A1");
  

  // Listen to the web socket connection
  io.on('connection', function(client) {
    client.on('join', function(handshake) {
      console.log(handshake);
    });
    
    sens1.on("change", function(){
      var val = this.scaleTo(0,10);
      client.emit('turn', val);
      if(val > 5){
        led.strobe();
      }else{
        led.stop().off();
      }
    });
    
  });
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);