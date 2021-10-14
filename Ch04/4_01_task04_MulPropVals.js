"use strict";

/*
    Create a function multiplyNumeric(obj) that multiplies all numeric property 
    values of obj by 2.

    // before the call
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    
    multiplyNumeric(menu);

    // after the call
        menu = {
        width: 400,
        height: 600,
        title: "My menu"
    };

    Please note that multiplyNumeric does not need to return anything. 
    It should modify the object in-place.

    P.S. Use typeof to check for a number here.
*/

// function prints an object to console
function printObjToConsole(obj) {
    for (let key in obj) {
        console.log("" + key + " : " + obj[key]);
    }
}

// function multiplies all numeric values of an object by 2
function multiplyNumeric(obj) {
    for (let key in obj) {

        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        }

    }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log("Before");
printObjToConsole(menu);

multiplyNumeric(menu);

console.log("After");
printObjToConsole(menu);
