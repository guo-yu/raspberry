# ![](http://ww1.sinaimg.cn/large/61ff0de3gw1e70bwd9d2ij208f01vt8r.jpg) Respberry Toolkit 

![](https://badge.fury.io/js/raspberry.png)

![](http://ww2.sinaimg.cn/mw1024/61ff0de3gw1e71mlj082tj20m809vq4s.jpg)

Respberry Toolkit 是一个同时运行在 PC/Mac 端与 树莓派 端的工具套件。使用Node编写，Npm安装。提供以下功能：

- 在树莓派上快速架设服务器
- 在服务的基础上提供一系列调用硬件服务的http接口（APIs）
- 一键设置树莓派的wifi（CLI），并在主机（PC/Mac）自动搜寻周围的树莓派，构建私有云。

## 如何安装

### 确保你的树莓派和（PC/Mac）已安装Node

如果没有安装，尝试在你的树莓派上这样安装node

````
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install nodejs npm
````

如果你的Pi不是基于官方推荐系统（Raspbian “wheezy”）, [查阅一下相关Node社区的官方安装教程](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#debian-lmde)

### 通过Npm安装此套件

````
// 确保在你的（PC/Mac）与树莓派上都安装好
$ sudo npm install respberry -g
````

## 小试牛刀

Respberry Toolkit 提供一个命令行操作，让一切都变得非常简单。

### 主服务端 (运行在你的 Mac/PC 上)

搜索你周围的树莓派，运行这个操作:
````
// 开始搜寻 
$ respberry connect

// 高级搜寻（定制搜寻），第一个参数是在Pi上设置无线时填写的token（默认是nodePi），第二个参数是需要搜寻的那个Pi所启用服务的端口（默认是9999）
// 默认 : respberry connect nodePi 9999
// e.g: respberry connect myPi 9998
$ respberry connect [token] [port]

// 搜索结果会是:
$ [Success] Hi, im here 192.168.1.100 // ssh your Pi use `ssh pi@192.168.1.100`

// 或者
$ [404] Respberry Pi Not Found ...
````

### 树莓派客户端 (运行在你的 Pi 上)

使用一个web操作平台管理你的树莓派，包括调用usb操作，进行wifi设置，关机，重启，或者运行其他的shell命令，而不通过ssh

#### 启动 web操作平台
````
$ respberry panel // 启动
$ respberry panel 9999 // 在选定的端口启动
````

#### 停止 web操作平台
````
$ respberry panel stop // 停止
````

### 设置树莓派的wifi

#### 搜索Pi附近的wifi
````
$ respberry wifi scan // 根据步骤来

// 搜索结果（按照信号强度排列）
[scan wifi] ssid:123 ? 
[scan wifi] ssid:223 ? 
[scan wifi] ssid:my network ? 
````

#### 设置 wifi 连接点
````
$ respberry wifi setup // 根据步骤来

// 提示步骤
[setup wifi] ssid ? // 输入 ssid
[setup wifi] passtype ? // 输入 加密类型
[setup wifi] password ? // 输入 wifi密码
[setup wifi] autoconnect ? // 设置是否自动重连 true or false;

// 结果会是
[setup wifi] wifi ssid:123 setup success [√]
// 或者 
[setup wifi] wifi ssid:123 setup fail [x]
````

#### 启用 wifi， 将自动进行连接
````
$ respberry wifi // start wifi

// 结果会是
[start wifi] wifi(ssid) connected [√]
// 或者 
[start wifi] wifi(ssid) failed [x]
````

#### 列出 wifi 设置，或者编辑 wifi 连接点
````
$ respberry wifi list // 列出所记住的 wifi 

// 结果是：
[list wifi] id:1 ssid:abc passtype:wap password:xxx

$ respberry wifi edit 1 // 编辑 (id 为 1) 的wifi

// 结果会是：
[setup wifi] xxx // 编辑步骤和设置wifi步骤相同
````

#### 停止 wifi 连接
````
$ respberry wifi stop // 断开 wifi

// 结果会是：
[stop wifi] wifi stoped [√]
````

## 开源协议

MIT License

## 开发计划 

[参考英文版说明](https://github.com/turingou/raspberry)

## 版本变更记录

[参考英文版说明](https://github.com/turingou/raspberry)