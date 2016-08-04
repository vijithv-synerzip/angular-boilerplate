var path = require('path');
var express = require('express');
var app = express();

var staticPath = path.join(__dirname, 'dist');
app.use(express.static(staticPath));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist','index.html'));
});

app.listen(9000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:9000');
});
