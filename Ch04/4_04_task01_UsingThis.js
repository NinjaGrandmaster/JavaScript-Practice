"use strict";

/*
    Here the function makeUser returns an object.

    What is the result of accessing its ref? Why?
*/

// this is undefined
function makeUser() {
    return {
      name: "John",
      ref: this
    };
}

// this is defined
function makeUserV2() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
}


// What's the result?
// an error occurs
// the this in this case takes the current this of the 
// function not the object making it undefined
let user = makeUser();
//alert( user.ref.name ); 

// This will work and not cuase an error because
// user.ref() is a method. And the value of this is set 
// to the object before dot .
let user2 = makeUserV2();
alert(user2.ref().name);