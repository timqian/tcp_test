var net = require('net');
var colors = require('colors');

var HOST = '127.0.0.1';
var PORT = 6969;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {

    // When we have a connection - a socket object is assigned to the connection automatically
    console.log('client address: '.yellow + sock.remoteAddress +':'+ sock.remotePort);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {

        console.log('get data from client: '.yellow + data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said: "' + data + '"');

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('client closed: '.yellow + sock.remoteAddress +' '+ sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on '.blue + HOST +':'+ PORT);
