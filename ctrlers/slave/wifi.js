// wifi settings on Pi
var iwlist = require('iwlist'),
    color = require('colors'),
    alert = require('../../lib/alert');

// scan wifis nearby
exports.scan = function(args,cb) {
    iwlist.scan(function(wifis){
        cb(wifis);
    });
}

// connect to a certain essid(wifi)
exports.connect = function(essid,cb) {
    if (essid) {
        iwlist.connect(essid,function(stat){
            cb(stat);
        })
    } else {
        cb(null);
    }
}

// note: this doesnt seem to work on raspbian
exports.stop = function() {
    return iwlist.disconnect();
}

// check if pi is connected to a wifi
exports.connected = function(cb) {
    iwlist.associated(function(err,associated){
        if (!err) {
            console.log(associated);
            cb(true);
        } else {
            cb(false)
        }
    })
}

// check if pi is connected to a wifi and visit Google
exports.online = function(cb) {
    iwlist.online(function(err){
        console.log(err);
        if (!err) {
            cb(true)
        } else {
            cb(false)
        }
    })
}

// active setup panel
exports.setup = function() {

}

// list all wifi configs
exports.list = function() {

}