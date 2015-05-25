'use strict';

var forever = require('forever-monitor');

var child = new (forever.Monitor)('server.js', {
    max: -1,
    silent: false,
    watch: true,
    watchDirectory: '.'
});

child.on('exit', function() {
    console.log('app.js has exited');
});

child.start();