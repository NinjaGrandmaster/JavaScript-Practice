"use strict";

/*
    Create a script that prompts the visitor to enter two numbers and then shows their sum.
    P.S. There is a gotcha with types.
*/

let x = +prompt("Enter a number", 0);
let y = +prompt("Enter another number", 0);

alert("Sum: " + (x + y));
