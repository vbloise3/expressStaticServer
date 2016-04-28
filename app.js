/**
 * Created by vincebloise on 4/25/16.
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
});

app.use(function(req, res) {
    res.status(404);
    res.send("Page not found!");
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send("Internal server error");
});

app.listen(3008, function() {
    console.log("App listening on port 3008");
});