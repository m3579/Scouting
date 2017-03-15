
var express = require("express");
var app = express();
var path = require("path");

app.set("port", (process.env.PORT || 9000));

app.set("views", __dirname + path.sep + "views");

app.use(express.static(__dirname));

app.listen(9000, function() {
	console.log("Listening on port 9000");
});