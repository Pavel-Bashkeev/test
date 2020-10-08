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
let money, time;



function start() {
       money = +prompt("Ваш бюджет на месяц?", "");
       time = prompt("Введите дату в формате DD-MM-YYYY", "");
       while (isNaN(money) || money == null || money == '') {
              money = +prompt("Ваш бюджет на месяц?", "");
       }

}
start();

let appData = {
       budget: money,
       expenses: {},
       optinalExpenses: {},
       income: [],
       timeData: time,
       savings: false,
       chooseExpenses: function () {
              for (let i = 0; i < 2; i++) {
                     let a = prompt(
                            "Введите обязательную статью расходов в этом месяце", ""
                     ),
                            b = +prompt("Во сколько это обойдется?", "");

                     if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 100) {
                            console.log(" done");
                            appData.expenses[a] = b;
                     } else {
                            i--;
                     }
              }
       },
       chooseOptExpenses: function () {
              for (let o = 0; o < 3; o++) {
                     let c = prompt("Введите необязательную статью расходов в этом месяце", ""),
                            d = prompt("Во сколько это обойдется?", "");
                     if ((typeof (c)) === 'string' && (typeof (c)) != null && (typeof (d)) != null && c != '' && d != '' && c.length < 100) {
                            console.log("done");
                            appData.optinalExpenses[c] = d;
                     } else {
                            o--;
                     }
              }
       },
       detectDayBudget: function () {
              appData.moneyPerDay = (appData.budget / 30).toFixed();
              alert("Ежедневный бюджет :" + appData.moneyPerDay);
       },
       detectLevel: function () {
              if (appData.moneyPerDay < 500) {
                     console.log("Минимальный уровень дохода");
              } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 3000) {
                     console.log("Средний уровень дохода");
              } else if (appData.moneyPerDay > 3000) {
                     console.log("Высокий уровень дохода");
              } else {
                     console.log("Произошла ошибка");
              }
       },
       checSavings: function () {
              if (appData.savings == true) {
                     let save = +prompt("Какова сумма накоплении?"),
                            porcent = +prompt("Под какой процент?");

                     appData.monthIncome = save / 100 / 12 * porcent;
                     alert("Ваш доход в месяц от накоплении: " + appData.monthIncome);
              }
       },
       chooseIncome: function () {
              for (let i = 0; i < 1; i++) {
                     let items = prompt('Введите дополнительные доходы через запятую', '');

                     if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
                            appData.income = items.split(', ');

                     } else {
                            i--;
                     }
              }
              appData.income.push(prompt('Может еще что-то ?'));
              appData.income.sort();
              delete appData.income[0];
              appData.income.forEach( function(item , i ) {
                     alert( i + ' Способы доп. заработка: ' + item);
              });
       }
};

for( let key in appData){
       console.log('Наша программа включает в себя данные: ' + key);
}
