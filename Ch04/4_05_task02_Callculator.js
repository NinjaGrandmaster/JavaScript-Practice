"use strict";

/*
    Create a constructor function Calculator that creates objects 
    with 3 methods:

    read() asks for two values using prompt and remembers them in 
    object properties.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.
*/
function Calculator() {
    this.v1 = 0;
    this.v2 = 0;

    this.read = function() {
        this.v1 = +prompt("Enter Value 1", 0);
        this.v2 = +prompt("Enter Value 2", 0);
    };

    this.sum = function () {
        return this.v1 + this.v2;
    };

    this.mul = function () {
        return this.v1 * this.v2;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );