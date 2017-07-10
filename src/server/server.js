const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');
users = [];
connectios = [];


app.get('/dist/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../../dist/bundle.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../../index.html')));




server.listen(port);
console.log('open in the browser at http://localhost:3000');


io.sockets.on('connection', function (socket) {
  connectios.push(socket);
  console.info('connected: %s sockets connected', connectios.length);


// diconnected
  socket.on('disconnect', function (data) {
    connectios.splice(connectios.indexOf(socket,1));
    console.info('disconnected: %s sockets connected', connectios.length);
  });

  //send messages
  socket.on('send message', function (data) {
    console.info(data);
    io.sockets.emit('new message', {msg: data})
  })

});