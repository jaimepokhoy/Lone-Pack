const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

io.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log("received");
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log('listening on *:' + port);
});
