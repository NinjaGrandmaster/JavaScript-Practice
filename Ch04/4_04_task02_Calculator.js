"use strict";

/*

    Create an object calculator with three methods:

    - read() prompts for two values and saves them as object properties.
    - sum() returns the sum of saved values.
    = mul() multiplies saved values and returns the result.
*/

let calculator = {
    read() {
        this.v1 = +prompt("Enter value 1", 0);
        this.v2 = +prompt("Enter value 2", 0);
    },

    sum () {
        return this.v1 + this.v2;
    },

    mul() {
        return this.v1 * this.v2;
    }
};
  
calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );
