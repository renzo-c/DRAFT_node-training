'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
  console.log('MAIN PROGRAM');
});

promise.then(console.log);
