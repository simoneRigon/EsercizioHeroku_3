var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT | 1337));

app.get('/', function(request, response){
    
    response.sendFile(__dirname + '/client.html');
    
});

app.use('/open', function(req, res){
    
    res.sendFile(__dirname + '/page1.html');
    
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});