/**
 * Created by vincebloise on 4/28/16.
 */
var express = require("express");

var ALLOWED_IPS = [
    "127.0.0.1",
    "123.456.7.89",
    "::1"
];

var api = express.Router();

api.use(function (req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed) {
        console.log("ip address: %s", req.ip);
        res.status(401).send("Not authorized");
    } else {
        next();
    }
});

api.use(function(req, res, next) {
    res.status(200).send("Authorized");
})

api.get("/users", function(req, res) {/* ... */});
api.post("/user", function(req, res) { /* ... */});
api.get("/messages", function(req, res) { /* ... */});
api.post("/message", function(req, res) { /* ... */});

module.exports = api;