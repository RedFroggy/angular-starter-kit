/*
 * Copyright © Conformitee - All Rights Reserved
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: hiveo-tech@hiveo.fr
 */

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
