var express = require('express');
var app = express();


// Define "create" endpoint for beta-signups:
app.post('/api/beta-signups', function (req, res) {
  res.status(501).send('Not Implemented');
});


// Define "create" endpoint for friend-referrals
app.post('/api/friend-referrals', function (req, res) {
  res.status(501).send('Not Implemented');
});


// Define "create" endpoint for sales demo requests:
app.post('/api/sales-demo-requests', function (req, res) {
  res.status(501).send('Not Implemented');
});


var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
