const utils = require('./utils.js');

const PROXY_CONFIG = [
  {
    context: utils.APIS,
    target: "http://localhost:8080",
    changeOrigin: true,
    secure: false
  }
];

module.exports = PROXY_CONFIG;
