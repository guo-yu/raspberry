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
    desktop = require('./ctrlers/desktop'),
    pi = require('./ctrlers/pi');

// CLI
exports.cli = function() {
    cli.version(pkg.version)
        .option('-c, connect','(on Mac/PC) scan and connect to Pi')
        .option('-p, panel','(on Pi) start or stop your panel ')
        .option('-w, wifi','(on Pi) scan wifi, list them , and connect to it.')
        .parse(process.argv);

    var args = cli.args;
    if (cli.connect) {
        console.log(alert.doing + ' scaning ...');
        desktop.scan(function(devices){
            console.log(devices);
            desktop.connect(devices,{
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
