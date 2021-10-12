"use strict";

/*
    Write an if condition to check that age is between 14 and 90 inclusively.

    “Inclusively” means that age can reach the edges 14 or 90.
*/

let userAge = +prompt("What is your age?", 0);

let message;

if (userAge >= 14 && userAge <= 90) {
    message = "Age is between 14 and 90";
} else {
    message = "age is not between 14 and 90";
}

alert(message);
