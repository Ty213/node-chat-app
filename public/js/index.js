var socket = io();

socket.on('connect', function() {
 console.log("connected to server");

 socket.emit('createMessage', {
    to: "bro",
    text: "hey this is andy"
 });
 });

 socket.on('disconnect', function() {
     console.log("disconnected from server");
 });

 socket.on('newMessage', function(message) {
    console.log("Hey new message!", message);
});