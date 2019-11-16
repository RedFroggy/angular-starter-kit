/*
 * Copyright © Conformitee - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

const path = require('path');
const proxy = require('http-proxy-middleware');

const APIS = [];

module.exports = {
  parseVersion,
  root,
  isExternalLib,
  generateProxies,
  APIS: APIS
};

const pjson = require('../package.json');

// return the version number from `pom.xml` file
function parseVersion() {
  return pjson.version;
}

const _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function isExternalLib(module, check = /node_modules/) {
  const req = module.userRequest;
  if (typeof req !== 'string') {
    return false;
  }
  return req.search(check) >= 0;
}

function generateProxies(env, targetUrl) {
  const proxies = [];
  APIS.forEach(route => {
    proxies.push(proxy(route, {
      target: targetUrl,
      changeOrigin: true,
      secure: false
    }));
  });
  proxies.push(proxy('/sockjs-node/**', {
    target: 'https://localhost:9060',
    changeOrigin: true,
    secure: true
  }));

  proxies.push(proxy('/websocket/**', {
    target: env === 'dev' ? targetUrl : 'wss://'+targetUrl.replace('http://', '').replace('https://', ''),
    ws:true,
    changeOrigin: true,
    preserveHost: true,
    secure: true
  }));

  return proxies;
}
