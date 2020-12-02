const totalIncome = document.querySelector('.total-income');
const totalExpenses = document.querySelector('.total-expenses');
const totalBudget = document.querySelector('.total-budget');

function sum() {
    const numIncome = document.querySelectorAll('.num.income');
    const numExpenses = document.querySelectorAll('.num.exp')

    let sumIncome = 0;
    numIncome.forEach(el => {
        if (el.value == '') {
            el.value = 0;
        } else {
            sumIncome += parseFloat(el.value)
        }
        totalIncome.innerHTML = sumIncome;
    });

    let sumExpenses = 0;
    numExpenses.forEach(el => {
        if (el.value == '') {
            el.value = 0;
        } else {
            sumExpenses += parseFloat(el.value)
        }
        totalExpenses.innerHTML = sumExpenses;
    });

    let total = sumIncome - sumExpenses;
    if(total > 0){
        totalBudget.style.color = 'green';
    } else {
        totalBudget.style.color = 'red';
    }
    totalBudget.innerHTML = total;
};

function reset(){
    const num = document.querySelectorAll('.num');
    const totalAreas = document.querySelectorAll('.total');
    num.forEach( el => {
        el.value = '';
    });
    totalAreas.forEach( el => {
        el.innerHTML = '';
    });
};