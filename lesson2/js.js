let money, time;

money = prompt("budget in month?", 1000);
time = prompt("input date", '');


let appData = {
    budget: +money,
    timeData: time,
    expenses: {
        question1: {},
        question2: {}
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.question1.what = prompt("What need to buy?", 'pie');
appData.expenses.question1.price = +prompt("How mutch it cost?", '10');
appData.expenses.question2.what = prompt("What need to buy?", '');
appData.expenses.question2.price = +prompt("How mutch it cost?", '');

alert('budjet for a day: ' + (appData.budget - appData.expenses.question1.price) / 30);

console.log(appData);