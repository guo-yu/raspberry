var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , pkg = require('../pkg').fetch('/package.json');

var Server = function(role,inputPort) {

    this.role = role;

    var port = inputPort ? inputPort : 9999,
        app = express();

    app.set('port', process.env.PORT || port);
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/server/public' }));
    app.use(express.static(path.join(__dirname, 'server/public')));

    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    };

    if (this.role == 'slave') {
        // pages
        app.get('/',require('./routes/slave/index'));

        // apis
        app.all('/usb',require('./routes/slave/usb'));
        app.all('/wifi',require('./routes/slave/wifi'));
        app.post('/sys/:action',require('./routes/slave/sys'));

        // auth handshake
        app.post('/handshake',require('./routes/slave/handshake'));

    } else if (this.role == 'master') {
        // panel
        app.get('/',require('./routes/master/index'));
    }

    this.app = app;

};

// start server on pi
Server.prototype.start = function() {
    var app = this.app;
    http.createServer(app).listen(app.get('port'), function(){
      console.log('[' + pkg.name + ']' + ' is running on ......' + ' ==> http://localhost:' + app.get('port'));
    });
};

// expose all
exports.create = Server;