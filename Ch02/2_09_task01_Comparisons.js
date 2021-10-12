"use strict";

/*

    What will be the result for these expressions?

    5 > 4
    "apple" > "pineapple"
    "2" > "12"
    undefined == null
    undefined === null
    null == "\n0\n"
    null === +"\n0\n"

*/

// true
console.log(5 > 4);
// false
console.log("apple" > "pineapple"); 
 // true, compares as strings. Would only convert values if comparing differnt data types.
console.log("2" > "12");
// true
console.log(undefined == null); 
// false, strict comparison of different types
console.log(undefined === null); 
// false, null can only equal (==) undefined
console.log(null == "\n0\n"); 
// false, strict comparison of different types
console.log(null === +"\n0\n")