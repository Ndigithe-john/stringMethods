'use strict';
// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
const email_function = function (email) {
  const [username, domain] = email.split('@');
  //   console.log(username, domain);

  const username_protected = username.substring(0, 5);

  const email_protected = username_protected + '...' + '@' + domain;

  return email_protected;
};
console.log(email_function('robin_singh@example.com'));
