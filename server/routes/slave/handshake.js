// handshake

var localip = require('my-local-ip');

module.exports = function(req,res,next) {
    var token = req.body.token;
    if (token) {
        res.json({
            stat: 'success',
            ip: localip().toString(),
            token: token,
            date: new Date()
        });
    } else {
        res.json({
            stat: 'fail'
        });
    }
}