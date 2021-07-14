"use strict"
let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let arr1 = [];
arr1 = arr.reduce(function unique(c, b) {

   if (!arr1.includes(b)) {
      arr1.push(b);
   }
   
   return arr1;
}, []);

console.log(arr1);