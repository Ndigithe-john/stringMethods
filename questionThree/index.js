'use strict';
// Write a JavaScript function to check whether a string is blank or not
const check_string = function (checkString) {
  return checkString.trim().length === 0;
};
console.log(check_string(''));
console.log(check_string('not empty'));
