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

var cli = require('commander'),
    pkg = require('./pkg').fetch('/package.json'),
    config = require('./pkg').fetch('/config.json'),
    alert = require('./lib/alert'),
    desktop = require('./sdk/desktop'),
    pi = require('./sdk/pi'),
    _ = require('underscore');

// CLI
exports.cli = function() {
    cli.version(pkg.version)
        .option('-c, connect','(on Mac/PC) scan and connect to Pi')
        .option('-p, panel','(on Pi) start or stop your panel ')
        .option('-w, wifi','(on Pi) scan wifi, list them , and connect to it.')
        .parse(process.argv);

    var args = cli.args;
    if (cli.connect) {
        console.log(alert.doing + 'Scaning ...');
        desktop.scan('9999',function(devices){
            desktop.connect(devices,{
                token: 'nodePi'
            },function(mime){
                if (mime && mime.length > 0) {
                    _.each(mime,function(item){
                        console.log(alert.success + 'Hi, im here ' + item.handshake.ip + ' @' + item.handshake.date);
                    });
                } else {
                    console.log(alert.notFound + 'Respberry Pi Not Found ...')
                }
            });
        });
    } else if (cli.panel) {
        if (args.length && args.length > 0) {
            pi.panel[args[0]](args);
        } else {
            console.log(alert.error + 'respberry panel [start] or [stop] ?')
        }
    } else if (cli.wifi) {
        pi.wifi[args[0]](args);
    } else {
        console.log('[>.<] Haha, Bite a little and enjoy! ');        
    }
}
