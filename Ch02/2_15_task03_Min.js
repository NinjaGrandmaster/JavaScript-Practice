"use strict";

/*
    Write a function min(a,b) which returns the least of two numbers a and b.

    For instance:
        min(2, 5) == 2
        min(3, -1) == -1
        min(1, 1) == 1
*/
function min (a, b) {

    if (a > b) {
        return b;
    }
    
    return a;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
