"use strict"
function Constr(first_name, second_name, age, city) {
   this.name = first_name;
   this.secondName = second_name;
   this.age = age;
   this.city = city;
  
};

let vas = new Constr('Василий', 'Иванов', '27', 'Минск');
console.log(vas);

let mari = new Constr('Мария', 'Петрова', '17', 'Орша');
console.log(mari);



Constr.prototype.infoUsers = function () {
   return ('Имя: ' + this.name + ' Фамилия: ' + this.secondName + ' Возраст: ' + this.age + ' Город ' + this.city);
};


console.log(vas.infoUsers());


console.log(mari.infoUsers());