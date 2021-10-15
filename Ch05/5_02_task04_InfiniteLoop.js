"use strict";

/*
    his loop is infinite. It never ends. Why?
*/

let i = 0;

while (i != 10) {
  i += 0.2;

  // due to precsion lodd i is never exacly 10, running the blow code shows this
  // best practice is to evade euqlity checks when working with decimals
  console.log(i);
  if(i > 10) {
      break;
  }
}
