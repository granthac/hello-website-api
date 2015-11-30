var express = require('express');
var api = express();


// Define "create" endpoint for beta-signups:
api.post('/api/beta-signups', function (req, res) {
  res.status(501).send('Not Implemented');
});


// Define "create" endpoint for friend-referrals
api.post('/api/friend-referrals', function (req, res) {
  res.status(501).send('Not Implemented');
});


// Define "create" endpoint for sales demo requests:
api.post('/api/sales-demo-requests', function (req, res) {
  res.status(501).send('Not Implemented');
});


var server = api.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('website-api listening at http://%s:%s', host, port);
});
