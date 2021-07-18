"use strict"
let user = { name: 'Ivan', years: 19, car: 'Subaru', telePhone: 'iPhone', city: 'Minsk'};
console.log(user);
let {name: userName, years: userYear, car: userCar, ...userOtherInfo} = user;

console.log(userName);

console.log(userYear);

console.log(userCar);

console.log(userOtherInfo);