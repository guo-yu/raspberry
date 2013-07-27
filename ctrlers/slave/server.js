// create server on Pi
var alert = require('../../lib/alert'),
    server = require('../../server/index');

exports.start = function(args) {
    if (args && args.length == 1) {
        if (!isNaN(parseInt(args))) {
            return server.create('slave',args[0]);
        } else {
            alert.error('make sure you have input a Number')
        }
    };
}

exports.stop = function() {

}