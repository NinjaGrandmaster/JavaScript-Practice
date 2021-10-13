"use strict";

/*
    Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1

    Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

    Note: In this task the function should support only natural values of n: integers up from 1.
*/

function pow(x, n) {
    let product = x;

    for(let i = 0; i < n - 1; i ++) {
        product *= x;
    }

    return product;
}

let x = +prompt("Enter an integer", 1);

let n = +prompt("Enter a power", 1);

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}
