const btnColGreen = document.querySelector('.btn-col-green');
const btnColRed = document.querySelector('.btn-col-red');
const btnColBlue = document.querySelector('.btn-col-blue');

const ColRed = localStorage.getItem("red");
const ColBlue = localStorage.getItem('blue');
const ColGreen = localStorage.getItem('green');

if (localStorage.getItem('red') !== null) {
    document.body.style.setProperty("--Main-Color", ColRed);
} else if (localStorage.getItem('blue') !== null) {
    document.body.style.setProperty("--Main-Color", ColBlue);
} else {
    document.body.style.setProperty("--Main-Color", ColGreen);
};

btnColGreen.addEventListener('click', () => {
    document.body.style.setProperty("--Main-Color", "rgb(0, 150, 0)");
    localStorage.setItem('green', 'rgb(0, 150, 0)');
    localStorage.removeItem('red');
    localStorage.removeItem('blue');
});
btnColRed.addEventListener('click', () => {
    const red = document.body.style.setProperty("--Main-Color", "rgb(150, 0, 0)");
    localStorage.setItem('red', 'rgb(150, 0, 0)');
    localStorage.removeItem('blue')
    localStorage.removeItem('green')
});
btnColBlue.addEventListener('click', () => {
    const blue = document.body.style.setProperty("--Main-Color", "rgb(0, 0, 150)");
    localStorage.setItem('blue', 'rgb(0, 0, 150)')
    localStorage.removeItem('green')
    localStorage.removeItem('red')
});