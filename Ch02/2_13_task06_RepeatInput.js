"use strict";

/*
    Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

    The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

    Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in 
    this task.
*/

while (true) {
    let userInput = prompt("Enter a number greater than")

    if (userInput === '' || userInput === null) {
        break;
    }

    if (+userInput > 100) {
        break;
    } else {
        alert("Number must be greater than 100!!!");
    }
}