var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())

var posts = [
  { title: 'POST 1', content: 'post 1Lorem ipsum dolor sit amet' },
  { title: 'POST 2', content: 'p2 Lorem ipsum dolor sit amet' },
  { title: 'POST 3', content: 'p3 - Lorem ipsum dolor sit amet' },
  { title: 'POST 4', content: 'p4 - Lorem ipsum dolor sit amet' }
];

app.get('/posts', function (req, res) {
  res.send({ posts: posts });
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
