# ![](http://ww1.sinaimg.cn/large/61ff0de3gw1e70bwd9d2ij208f01vt8r.jpg) Respberry Toolkit ![](https://badge.fury.io/js/respberry.png)

Respberry Toolkit based on node, for nodejs apps, make life easier.

- create web server on Pi: boardcast Pi's IP and provides some apis
- provides web panel of Pi: run shell on web page
- setup Pi wifi network: auto-connect configs,etc.

## How to install

### Install Node.js first

the very first, make sure your Pi has node installed, if not, try install node.js first:

````
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install nodejs npm
````

if your Pi runs on Debian, [check this official guide](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#debian-lmde)

### Install via Npm

````
$ sudo npm install respberry -g
````

## Bite a little

Respberry Toolkit provides a CLI, which means you type some commands and everything will be setup and ready for connect

### respberry panel

manage your Pi on web panel

#### start panel
````
$ respberry panel // start your panel
$ respberry panel -p 9999 // start your panel at selected port
````

#### stop panel
````
$ respberry panel stop // stop your panel
````

### respberry wifi

#### setup wifi
````
$ respberry wifi setup // follow steps to setup wifi

// result
[setup wifi] ssid ? // input ssid
[setup wifi] passtype ? // input passtype
[setup wifi] password ? // input password
````

#### start wifi and setup auto connect
````
$ respberry wifi // start wifi

// result
[start wifi] wifi(ssid) connected [√]
// or 
[start wifi] wifi(ssid) failed [x]
````

#### stop wifi support
````
$ respberry wifi stop // stop wifi

// result
[stop wifi] wifi stoped [√]
````

## License

MIT License

## Roadmap -> 0.1.0

- `[ ]` add mobile panel support
- `[ ]` add wechat interface/api support

## Changelog