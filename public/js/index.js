var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'aiddd@example.com',
        text: 'Hello, this is Bruno'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});