var fs = require('fs');

exports.fetch = function(dist) {
    return JSON.parse(fs.readFileSync(__dirname + dist))
}

exports.set = function(dist,obj) {    
    if (obj && typeof(obj) == 'object') {
        fs.writeFileSync( __dirname + dist,JSON.stringify(obj));
        return obj;
    } else {
        return false;
    }
}