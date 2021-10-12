"use strict";

/*
    Write an if condition to check that age is NOT between 14 and 90 inclusively.

    Create two variants: the first one using NOT !, the second one – without it.

*/

let userAge = +prompt("What is your age?", 0);

let message;

// With NOT !
if (!(userAge >= 14 && userAge <= 90)) {
    message = "Age is not between 14 and 90";
} else {
    message = "Age is between 14 and 90";
}

alert("With NOT (!): " + message);

// Without NOT (!)
if (userAge < 14 || userAge > 90) {
    message = "Age is not between 14 and 90";
} else {
    message = "Age is between 14 and 90";
}

alert("Without NOT (!): " + message);
