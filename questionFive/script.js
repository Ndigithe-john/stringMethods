'use strict';
// Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."

//Uncomment to use user input
// const input_words = String(
//   prompt('Input Words you want our function to reverse for you')
// );
const reverse_string = function (words) {
  if (typeof words !== 'string') {
    return 'It must be a string.';
  } else {
    const input_string = words.split(' ');
    const reversedWords = input_string.map(word =>
      word.split('').reverse().join('')
    );

    const reversedString = reversedWords.join(' ');

    return reversedString;
  }
};
// alert('Check your console for the reversed string');
// const reversed = reverse_string(input_words);// Test using users input string
// console.log(reversed);
//using our test data
console.log(reverse_string('JavaScript Exercises'));
console.log(reverse_string('abc'));
console.log(reverse_string(1233));
