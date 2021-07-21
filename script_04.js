"use strict"
function HouseBuilder(width, length, number_of_floor) {
   this.width = width;
   this.length = length;
   this.number_of_floor = number_of_floor;

};

let firstHouse = new HouseBuilder(10, 15, 2);
console.log(firstHouse);

let secondHouse = new HouseBuilder(13, 11, 2);
console.log(secondHouse);

HouseBuilder.prototype.calcArea = function() {
   return (this.width*this.length*this.number_of_floor);
};
firstHouse.totalArea = firstHouse.calcArea();
console.log(firstHouse.totalArea);
secondHouse.totalArea = secondHouse.calcArea();
console.log(secondHouse.totalArea);

