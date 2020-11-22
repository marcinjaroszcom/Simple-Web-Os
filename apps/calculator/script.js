const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function (e) {
    e.addEventListener('click', calculate);
});

function calculate(e) {
    const clickedButtonValue = e.target.value;

    if (clickedButtonValue === '=' && display.value !== '') {
        display.value = eval(display.value);
    } else if (clickedButtonValue === 'C') {
        display.value = '';
    } else {
        display.value += clickedButtonValue;
    }
};