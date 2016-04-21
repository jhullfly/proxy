'use strict';

var httpProxy = require('http-proxy');
httpProxy.createProxyServer({target:process.env.TARGET}).listen(process.env.PORT);
