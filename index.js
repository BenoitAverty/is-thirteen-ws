var express = require('express');
var is = require('is-thirteen');
var app = express();

app.get('/is-thirteen', function (req, res) {

  var queries = req.query.query;
  console.log("received a query: "+queries);
  var result = {};
  queries.forEach(function(q) {
    console.log(q);
    result[q] = {query: q, isThirteen: is(q).thirteen()};
  });

  res.send(JSON.stringify(result));
});

app.listen(8080, function () {
  console.log('isThirteen is ready!');
});
