"use strict";

/*
    For each loop write down which values it is going to show. Then compare with the answer.

    Both loops alert same values or not?
*/

// for both incrmenting happens at end of loop so position of ++ does not matter

//The postfix form:

// output: 0 1 2 3 4
for (let i = 0; i < 5; i++) console.log( i );

// The prefix form:

// output: 0 1 2 3 4
for (let i = 0; i < 5; ++i) console.log( i );