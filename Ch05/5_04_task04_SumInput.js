"use strict";

/*
    Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

    P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
    let numberArr = [];

    
    while (true) {
        let userInput = prompt("Enter a number",'');

        // empty line or canceling returns null
        if (userInput === '' || userInput === null || !isFinite(userInput)) {
            break;
        }

        numberArr.push(+userInput);
    }

    let sum = 0;

    for (let i = 0; i < numberArr.length; i ++) {
        sum += numberArr[i];
    }

    return sum;
}

alert(sumInput());
