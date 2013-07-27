// create server on Pi
var alert = require('../../lib/alert'),
    Server = require('../../server/index');

exports.create = function(port) {
    if (port) {
        return new Server.create('slave',port);
    } else {
        return new Server.create('slave');
    }
}

exports.start = function(args) {
    if (args && args.length == 2) {
        var port = args[1];
        if (!isNaN(parseInt(port))) {
            var server = exports.create(parseInt(port));
            server.start();
            return server;
        } else {
            console.log(alert.error + 'make sure you have input a Number')
        }
    } else if (args.length == 1) {
        var server = exports.create();
        server.start();
        return server;
    }
}

exports.stop = function() {

}