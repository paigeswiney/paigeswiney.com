var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

PORT = process.env.PORT || 8080;

app.listen(PORT, function(err) { 
    if(err) {
        console.log("server error", err);
        process.exit(1);
    };
    console.log("FUCK YEAH ... server is working on port " + PORT);
});