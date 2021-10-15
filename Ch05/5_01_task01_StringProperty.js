"use strict";

/*
    Consider the following code:
*/

// How do you think, will it work? What will be shown?
// causes an error, this shows that  primitives are not objects.

let str = "Hello";

str.test = 5;

alert(str.test);
