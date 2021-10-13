"use strict";

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// Will the function work differently if else is removed?
// Is there any difference in the behavior of these two variants?

// Answer: There is no difference between the vaarients

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}


function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

