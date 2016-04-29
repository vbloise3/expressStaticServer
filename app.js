/**
 * Created by vincebloise on 4/25/16.
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');
var apiRouter = require("./routes/api_router");

var app = express();

app.use(morgan("dev"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api", apiRouter);

app.listen(3008, function() {
    console.log("App listening on port 3008");
});