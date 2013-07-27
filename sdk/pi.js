// Respberry Pi part
var server = require('../ctrlers/slave/server'),
    wifi = require('../ctrlers/slave/wifi');

module.exports = {
    panel: {
        server: function(args) {
            server.start(args)
        },
        stop: function(args) {
            server.stop();
        }
    },
    wifi: {
        scan: function(args) {
            wifi.scan(args,function(list){
                console.log(list);
            });
        },
        stop: function(args) {
            wifi.stop()
        },
        connect: function(args) {
            wifi.connect(args)
        },
        setup: function(args) {
            wifi.setup(args)
        },
        list: function(args) {
            wifi.list(args)
        }
    }
}