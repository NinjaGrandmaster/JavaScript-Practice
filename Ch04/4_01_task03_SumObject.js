"use strict";

/* 
    We have an object storing salaries of our team:
    Write the code to sum all salaries and store in the variable sum. 
    Should be 390 in the example below.

    If salaries is empty, then the result must be 0.
*/

function isEmpty(obj) {
    // if no keys object is empty return true
    if (Object.keys(obj).length === 0) {
        return true
    }

    return false;
}

function sumSalaries(obj) {
    // if object is empty return 0
    if (isEmpty(obj)) {
        return 0;
    }

    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;

}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let emptySalariesObj = {};

alert(sumSalaries(salaries)); // 390

alert(sumSalaries(emptySalariesObj)); // 0
