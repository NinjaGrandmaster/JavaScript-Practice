"use strict";

// what will the result be?

// 3
// The precedence of AND && is higher than ||, so it executes first.
// The result of 2 && 3 = 3, so the expression becomes:
// null || 3 || 4
alert( null || 2 && 3 || 4 );
