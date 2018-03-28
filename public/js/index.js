var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var messages = document.getElementById('messages');
  var li = document.createElement("li");
  var content = document.createTextNode(message.text); 
  li.appendChild(content);
  messages.appendChild(li);
});



var messageForm = document.getElementById('message__form');
var messageText = document.getElementById('message__text');
messageForm.addEventListener("submit", function(e){
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: messageText.value
  }, function(data) {
    console.log(data)
  });

  messageText.value = "";
});