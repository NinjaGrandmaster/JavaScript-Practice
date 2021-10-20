"use strict";

/*
    We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

    Create a function copySorted(arr) that returns such a copy.
*/

function copySorted(arr) {
    // slice makes a copy of array then we can sort and return the copy
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
