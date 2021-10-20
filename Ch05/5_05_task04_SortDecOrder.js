"use strict";

/*
    sort array in decreasing order
*/
function compareDec(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

let arr = [5, 2, 1, -10, 8];
let arr2 = [5, 2, 1, -10, 8];

arr.sort(compareDec);
// another way to achieve same result
arr2.sort((a, b) => b - a);


alert( arr ); // 8, 5, 2, 1, -10

alert( arr2 ); // 8, 5, 2, 1, -10
