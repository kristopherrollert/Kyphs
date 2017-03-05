'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

let led = null;
let sensors = null;
let sens1 = null;
let sens2 = null;
let sens3 = null;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});


five.Board().on('ready', function() {
  console.log("Arduino Ready!");
  //Listen to the web socket connection
  io.on('connection', function(client) {
    client.on('join', function(handshake) {
      console.log(handshake);
    });
    sens1 = new five.Sensor({pin : "A0", freq : 1000, threshold : 350});
    sens2 = new five.Sensor({pin : "A1", freq : 1000, threshold : 350});
    sens3 = new five.Sensor({pin : "A5", freq : 1000, threshold : 350});
    // sensors = new five.Sensors([ { pin: "A0" }, { pin: "A1" }, { pin: "A5" }]);
    // sensors.on("change", function(){
    //   client.emit('turn', this.value);
    // });
    sens1.on("change", function(){
      // var val1 = this.scaleTo(0,10);
      // var sens2Val = sens2.scaleTo(0,10)
      var retVal = [this.value, sens2.value, sens3.value]
      client.emit('turn', retVal);
    });
    
    sens2.on("change", function(){
      // var val = this.scaleTo(0,10);
      // var sens1Val = sens1.scaleTo(0,10)
      var retVal = [sens1.value, this.value, sens3.value];
      client.emit('turn2', retVal);
    });
    
    sens3.on("change", function(){
      // var val = this.scaleTo(0,10);
      var retVal = [sens1.value, sens2.value, this.value];
      client.emit('turn3', retVal);
    });
    
  });
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);