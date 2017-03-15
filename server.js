
var express = require("express");
var app = express();
var path = require("path");

app.set("views", __dirname + path.sep + "views");

app.use(express.static(__dirname));

app.listen(3000, function() {
	console.log("Listening on port 3000");
});