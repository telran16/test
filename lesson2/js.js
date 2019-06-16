let money = +prompt("budget in month?", ''),
    time = prompt("input date in format YYYY-MM-DD", '');

let appData = {
    budget: +money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("What need to buy?", 'pie'),
        b = +prompt("How mutch it cost?", '10');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != 'null'
    && (typeof(b)) != 'null' && a != '' && b != ''
    && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
    
}

appData.moneyPerDay = appData.budget / 30;
alert('budjet for a day: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay >= 2000) {
    console.log("Максимальный уровень достатка");
} else {
    console.log("Произошла ошибка");
}