"use strict";

/*
    Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

    The resulting value must be returned as a number.

    The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
*/

function readNumber () {
    
    while (true) {
        let userInput = prompt("Enter a number",'');

        // empty line or canceling returns null
        if (userInput === '' || userInput === null) {
            return null;
        }

        // isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity
        if (isFinite(userInput)) {
            return +userInput;
        }
    }
}

alert(readNumber());
