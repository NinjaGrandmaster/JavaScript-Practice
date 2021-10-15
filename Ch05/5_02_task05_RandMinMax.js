"use strict";

/*
    The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

    Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
*/

function random(min, max) {
    return (Math.random() * max) + min;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) ); 
