// desktop part

var myIp = require('my-local-ip'),
    evilscan = require('evilscan'),
    async = require('async'),
    alert = require('../lib/alert'),
    api = require('../lib/api');

module.exports = {
    scan: function(cb) {
        var ip = myIp().toString().split('.'),
            gateway = ip,
            pies = [];

        gateway[3] = '0';
        gateway = gateway.join('.');

        var scanner = new evilscan({
            target: gateway + '/24',
            port: '80',
            banner: true
        },function(s){

            s.on('result',function(pi){
               pies.push(pi)
            }).on('error',function(err) {
               console.log(alert.error);
               console.log(err.toString());
            }).on('done',function(){
               cb(pies);
            });

            s.run();
        });
    },
    connect: function(ip,pi,cb) {

        var devices = [],
            my;

        if (typeof(ip) == 'string') {
            devices.push(ip)
        } else {
            devices = ip;
        }

        var fetch = function(device,cb) {
            var url = 'http://' + device.ip + ':' + pi.port + '/handshake';
            api.post(url,{
                token: pi.token
            },function(err,result){
                if (!err) {
                    if (result.stat && result.stat == 'ok') {
                        my = device;
                        my['msg'] = result.msg;
                    };
                }
                cb();
            })
        };

        async.each(devices,fetch,function(err){
            if (!err) {
                cb(my);
            }
        })
    }
}