var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var posts = [
  { title: 'ANONIMO', content: 'post 1Lorem ipsum dolor sit amet' },
  { title: 'ANONIMO', content: 'p2 Lorem ipsum dolor sit amet' },
  { title: 'ANONIMO', content: 'p3 - Lorem ipsum dolor sit amet' },
  { title: 'ANONIMO', content: 'p4 - Lorem ipsum dolor sit amet' }
];

app.get('/posts', function (req, res) {
  res.send({ posts: posts });
});

io.on('connection', function(socket){
  socket.on('post', function(msg){
    console.log(msg);
    io.emit('post', msg);
  });
});

server.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
