"use strict"
function cleanRoom(dirtyLevel) {
   return new Promise(function(resolve, reject) {
   if(dirtyLevel > 10) {
      setTimeout(() => reject(dirtyLevel), dirtyLevel*1000);
   } else {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel*1000); 
   }
   
   });
   
};

cleanRoom(13).then(
   result => console.log(`Уборка проведена успешно за ${result} секунд`),
   error => console.log(`Уборка не проведена время более ${error} секунд`)
);

