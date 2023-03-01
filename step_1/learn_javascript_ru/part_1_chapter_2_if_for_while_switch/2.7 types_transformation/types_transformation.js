"use strict";  // этот код работает в современном режиме
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
console.log( `a=${a}, b=${b}, c=${c}, d=${d}` )

let y = 2;
let x = 1 + (y *= 2);
console.log( `y=${y}, x=${x}` )

let e = 1;
let f = 2;
console.log(+e + +f); // было 12, добавили "+"
