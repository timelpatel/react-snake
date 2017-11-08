var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src/public'));

app.listen(3000, function () {
  console.log('Snake listening on port 3000.');
});
