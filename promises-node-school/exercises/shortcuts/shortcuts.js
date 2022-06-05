'use strict';

var message = 'This is an error';
var promise1 = Promise.resolve('SECRET VALUE');
var promise2 = Promise.reject(new Error(message));

promise1.then(console.log);
promise2.then(console.log);
promise2.catch(function (err) {
  console.log(err.message);
});
