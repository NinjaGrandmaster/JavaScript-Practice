"used strict";

// What are results of these expressions?
// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1 - subtraction only works with numbers "" is converted to 0
console.log(true + false); // 0 
console.log(6 / "3"); // 2
console.log("2" + "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2 ); // NaN (not a number)
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1 , null converted to 0
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2, space characters are trimmed off meaning " \t \n" becomes and empty string which converts to 0