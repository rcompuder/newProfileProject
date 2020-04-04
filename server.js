// Dependencies
const http = require("http");
const fs = require("fs");
var express = require('express');
var app = express();

// Set our port to 8080
const PORT = 8080;
app.use(express.static('client'));


// Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {

//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + "client", function(err, data) {
//     if (err) throw err;
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

// // Create our server
// const server = http.createServer(handleRequest);

// Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
