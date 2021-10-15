"use strict";

/*
    Create a function randomInteger(min, max) that generates a random integer number from min to max including 
    both min and max as possible values.

    Any number from the interval min..max must appear with the same probability.
*/

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
