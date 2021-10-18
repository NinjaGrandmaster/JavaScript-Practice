"use strict";

/*
    Write the function camelize(str) that changes dash-separated words like “my-short-string” 
    into camel-cased “myShortString”.
    That is: removes all dashes, each word after dash becomes uppercased.
*/

function camelize(str) {
    let arr = str.split('-');

    // if only one word in string return it
    if (arr.length < 1) {
        return str;
    }

    for (let i = 1; i < arr.length; i++) {
        // capitalize all words after the first word
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
} 

alert(camelize("background-color")); // 'backgroundColor';
alert(camelize("list-style-image")); // 'listStyleImage';
alert(camelize("-webkit-transition")); // 'WebkitTransition';
alert(camelize("background")); // /background
