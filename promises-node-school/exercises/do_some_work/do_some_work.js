'use strict';

var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000').then(function (userId) {
  return qhttp.read('http://localhost:7001/' + userId).then(function (json) {
    console.log(JSON.parse(json)).then(null, console.error).done();
  });
});
