'use strict';

/* global getPromise1, getPromise2 */

function all(promise1, promise2) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var output = [];

    promise1.then(function (num) {
      output[0] = num;
      counter += 1;

      if (counter === 2) {
        fulfill(output);
      }
    });
    promise2.then(function (num) {
      output[1] = num;
      counter += 1;

      if (counter === 2) {
        fulfill(output);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
