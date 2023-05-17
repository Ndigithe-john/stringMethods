'use strict';
// Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other
const check_string_anagram = function (first, second) {
  let len1 = first.length;
  let len2 = second.length;
  if (len1 !== len2) {
    console.log('Invalid Input');
    return;
  }
  let str1 = first.split('').sort().join('');
  let str2 = second.split('').sort().join('');
  if (str1 === str2) {
    console.log('True');
  } else {
    console.log('False');
  }
};
check_string_anagram('indian', 'ndiani');
check_string_anagram('stringone', 'stringtwo');
check_string_anagram('abcde', 'ecbda');
