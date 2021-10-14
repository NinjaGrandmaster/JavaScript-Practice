"use strict";

/*
    Write the function isEmpty(obj) which returns true if the object has no properties, 
    false otherwise.
*/

function isEmpty(obj) {
    // if no keys object is empty return true
    if (Object.keys(obj).length === 0) {
        return true
    }

    return false;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
