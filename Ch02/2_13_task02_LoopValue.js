"use strict";

/*
    For every loop iteration, write down which value it outputs and then compare it with the solution.

    Both loops alert the same values, or not?
*/

// The prefix form ++i:

let i = 0;
// output: 1 2 3 4, adds to value before comparison
while (++i < 5) console.log( i );

//The postfix form i++

i = 0;
//output 1 2 3 4 5, adds to value after comparison
while (i++ < 5) console.log( i );
