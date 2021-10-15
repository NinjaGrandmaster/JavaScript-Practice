"use strict";

/*
    What is the result? Why?

    out puts the array inclusding the function

*/

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); //a,b,function(){...}
