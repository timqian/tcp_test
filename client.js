var net = require('net');
var colors = require('colors');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();

// Connect to the server
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: '.blue + HOST + ':' + PORT);

    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    client.write('<message> hello </message>');

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {

    console.log('data from server: '.blue + data);

    // Close the client socket completely
    client.destroy();

});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed'.blue);
});
