var color = require('colors');

exports.error = color.red('[Error] Opps.. here are error details: ');
exports.success = color.green('[Success] ');
exports.notFound = color.yellow('[404] ');
exports.doing = color.yellow('[Loading] ');
exports.wifi = {
    scan: color.yellow('[scan wifi] '),
    setup: color.yellow('[setup wifi] '),
    start: color.green('[start wifi] '),
    stop: color.red('[stop wifi] '),
    list: color.yellow('[list wifi] ')
}