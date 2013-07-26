# ![](http://ww1.sinaimg.cn/large/61ff0de3gw1e70bwd9d2ij208f01vt8r.jpg) Respberry Toolkit 

![](https://badge.fury.io/js/respberry.png)

Respberry Toolkit & Webpanel based on node, for nodejs apps, makes life easier.

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
// make sure install both on your PC/Mac and Pi
$ sudo npm install respberry -g
````

## Bite a little

Respberry Toolkit provides a CLI, which means you type some commands and everything will be setup and ready for connect

### Desktop panel (on your Mac/PC)

connect your Pi by running:
````
// start desktop server
$ respberry server
// or 
$ respberry server -p 8888 // at selected port

// when your Pi get ready (wifi connected), it will be POST a msg contains Pi desc/IP
// like this
$ [Pi] Hi, im here 192.168.1.100 // ssh your Pi use `ssh pi@192.168.1.100`

// or
$ [Pi] Hi, im here 192.168.1.100
       Web panel: http://192.168.1.100:3000/
````

### Respberry panel (on your Pi)

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

#### scan wifi
````
$ respberry wifi scan // follow steps to setup wifi

// result
[scan wifi] ssid:123 ? // wifi details
[scan wifi] ssid:223 ? // wifi details
[scan wifi] ssid:my network ? // wifi details
````

#### setup wifi
````
$ respberry wifi setup // follow steps to setup wifi

// steps
[setup wifi] ssid ? // input ssid
[setup wifi] passtype ? // input passtype
[setup wifi] password ? // input password
[setup wifi] autoconnect ? // true or false;
[setup wifi] heartbeat server ? // type your DESKTOP SERVER ADD.( e.g: http://192.168.1.99:3000 ) or false;

// results
[setup wifi] wifi ssid:123 setup success [√]
// or 
[setup wifi] wifi ssid:123 setup fail [x]
````

#### start wifi
````
$ respberry wifi // start wifi

// result
[start wifi] wifi(ssid) connected [√]
// or 
[start wifi] wifi(ssid) failed [x]
````

#### list wifi and edit
````
$ respberry wifi list // list wifi configs

// result
[list wifi] id:1 ssid:abc passtype:wap password:xxx

$ respberry wifi edit 1 // edit (id:1)wifi configs

// result
[setup wifi] xxx // same as #start wifi
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