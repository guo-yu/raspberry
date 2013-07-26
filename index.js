//                           __                        
//    _________ __________  / /_  ___  ____________  __
//   / ___/ __ `/ ___/ __ \/ __ \/ _ \/ ___/ ___/ / / /
//  / /  / /_/ (__  ) /_/ / /_/ /  __/ /  / /  / /_/ / 
// /_/   \__,_/____/ .___/_.___/\___/_/  /_/   \__, /  
//                /_/                         /____/   
// 
// @brief: Respberry Toolkit based on node, for nodejs apps, makes life easier.
// @desc:
// - create web server on Pi: boardcast Pi's IP and provides some apis
// - provides web panel of Pi: run shell on web page
// - setup Pi wifi network: auto-connect configs,etc.
// @github: https://github.com/turingou/raspberry.git
// @npm: npm install respberry
// @author: [turingou]

var evilscan = require('evilscan'),
    api = require('./lib/api'),
    myIp = require('my-local-ip'),
    cli = require('commander'),
    async = require('async'),
    pkg = require('./pkg').fetch('/package.json'),
    config = require('./pkg').fetch('/config.json'),
    alert = require('./lib/alert');

exports.desktop = {
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

exports.pi = {

}

exports.cli = function() {
    cli.version(pkg.version)
        .option('-c, connect','(on Mac/PC) scan and connect to Pi')
        .option('-p, panel','(on Pi) start or stop your panel ')
        .option('-w, wifi','(on Pi) scan wifi, list them , and connect to it.')
        .parse(process.argv);

    var args = cli.args;
    if (cli.connect) {
        console.log(alert.doing + ' scaning ...');
        exports.desktop.scan(function(devices){
            console.log(devices);
            exports.desktop.connect(devices,{
                token: 'nodePi',
                port: '9999'
            },function(myPi){
                if (myPi) {
                    console.log(alert.success + 'Hi, im here ' + myPi.ip)
                } else {
                    console.log(alert.notFound + 'Respberry Pi Not Found ...')
                }
            })
        });
    } else {
        console.log('[>.<] Haha, Bite a little and enjoy! ');
    }
}
