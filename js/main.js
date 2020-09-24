'use strict';

// while (num < 55){
//        console.log(num);
//        num++;
// }
// let num = 50;
// do{
//        console.log(num);
//        num++;
// } while( num < 55 );

// for (let i = 1; i < 8; i++){
//        if ( i == 6 ){
//               continue
//        }
//        console.log(i)
// }
let money = +prompt("Ваш бюджет на месяц?", ""),
       time = prompt("Введите дату в формате DD-MM-YYYY", "");

let appData = {
       budget: money,
       expenses: {},
       optinalExpenses: {},
       income: [],
       timeData: time,
       savings: false
};

for (let i = 0; i < 2; i++) {
       let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
              b = +prompt("Во сколько это обойдется?", "");

       if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 100 ){
              console.log(" done");
              appData.expenses[a] = b;
       } else {
               i-- ;
       }
 };

 appData.moneyPerDay = appData.budget / 30;

 alert("Ежедневный бюджет :" + appData.moneyPerDay);

 if(appData.moneyPerDay < 500) {
        console.log("Минимальный уровень дохода");
 } else if(appData.moneyPerDay > 500 && appData.moneyPerDay < 3000){
        console.log("Средний уровень дохода");
 } else if(appData.moneyPerDay > 3000) {
        console.log("Высокий уровень дохода");
 } else {
       console.log("Произошла ошибка")
 }
