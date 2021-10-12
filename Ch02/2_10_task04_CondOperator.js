"use strict";

/*
    Rewrite this if using the conditional operator '?':

    let result;

    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }
*/

let result;
let a = 1;
let b = 10;

// conditional statement ? value if true : value if false
result = (a + b < 4 ? 'Below' : 'Over');

alert(result);
