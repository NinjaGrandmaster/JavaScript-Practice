"use strict";

// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
// fruits array will ahow 4 becuase both shoppingCart and fruits reference the same array
alert( fruits.length );
