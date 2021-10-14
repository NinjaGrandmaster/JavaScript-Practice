"use strict";

/*
    Write the code, one line for each action:

        Create an empty object user.
        Add the property name with the value John.
        Add the property surname with the value Smith.
        Change the value of the name to Pete.
        Remove the property name from the object.
*/

//create an empty user
let user = {};

// Add the property name with the value John
user.name = "John";
console.log(user.name);

// Add the property surname with the value Smith.
user.surname = "Smith";
console.log(user.surname);

// Change the value of the name to Pete.
user["name"] = "Pete";
console.log(user.name);

// Remove the property name from the object.
delete user.name;
console.log(user.name);
