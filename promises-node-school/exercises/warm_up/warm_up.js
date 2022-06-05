'use strict';

function run() {
  console.log('TIMED OUT!');
  return;
}
setTimeout(run, 300);
