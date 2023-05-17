'use strict';
// A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome. Write a JavaScript function to determine whether a given string is a palindrome.
// const is_palindrome = function (s, i) {
//   if (i > s.length / 2) {
//     return true;
//   }
//   return s[i] == s[s.length - i - 1] && is_palindrome(s, i + 1);
// };

// let str = 'meem';
// let ans = is_palindrome(str, 0);
// if (ans == true) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }
const is_palindrome = str => str.split('').reverse().join('') === str;
console.log(is_palindrome('madam'));
console.log(is_palindrome('book'));
console.log(is_palindrome('dad'));
