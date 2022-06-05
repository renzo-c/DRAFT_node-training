'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('MANHATTAN');
});

function attachTitle(term) {
  return 'DR. ' + term;
}

promise.then(attachTitle).then(console.log);

// Promise.resolve('MANHATTAN')
//   .then(attachTitle)
//   .then(console.log);
