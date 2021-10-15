"use strict";

/*
    Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
*/
function checkSpam(str) {
    let tempStr = str.toLowerCase();

    if (tempStr.includes("viagra") || tempStr.includes("xxx")) {
        return true;
    }

    return false
}

alert(checkSpam('buy ViAgRA now')); // true
alert(checkSpam('free xxxxx')); //  true
alert(checkSpam("innocent rabbit")); // false
