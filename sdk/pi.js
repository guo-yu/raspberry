// Respberry Pi part
var server = require('../ctrlers/slave/server'),
    wifi = require('../ctrlers/slave/wifi');

module.exports = {
    panel: {
        start: function(args) {
            return server.start(args)
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
            var stopper = wifi.stop();
            console.log(stopper)
        },
        connect: function(essid) {
            wifi.connect(essid)
        },
        setup: function(args) {
            wifi.setup(args)
        },
        list: function(args) {
            wifi.list(args)
        }
    },
    usb: {
        list: function(args) {

        }
    }
}