// -----------------------------------------------------------------Change Color
const btnColGreen = document.querySelector('.btn-col-green');
const btnColRed = document.querySelector('.btn-col-red');
const btnColBlue = document.querySelector('.btn-col-blue');

const ColRed = localStorage.getItem("red");
const ColBlue = localStorage.getItem('blue');
const ColGreen = localStorage.getItem('green');

if(localStorage.getItem('red') !== null) {
    document.body.style.setProperty("--Main-Color", ColRed);
}else if(localStorage.getItem('blue') !== null) {
    document.body.style.setProperty("--Main-Color", ColBlue);
} else {
    document.body.style.setProperty("--Main-Color", ColGreen);
};

btnColGreen.addEventListener('click', () =>{
    document.body.style.setProperty("--Main-Color", "rgb(0, 150, 0)");
    localStorage.setItem('green', 'rgb(0, 150, 0)');
    localStorage.removeItem('red');
    localStorage.removeItem('blue');
});
btnColRed.addEventListener('click', () =>{
    const red = document.body.style.setProperty("--Main-Color", "rgb(150, 0, 0)");
    localStorage.setItem('red', 'rgb(150, 0, 0)');
    localStorage.removeItem('blue')
    localStorage.removeItem('green')
});
btnColBlue.addEventListener('click', () =>{
    const blue = document.body.style.setProperty("--Main-Color", "rgb(0, 0, 150)");
    localStorage.setItem('blue', 'rgb(0, 0, 150)')
    localStorage.removeItem('green')
    localStorage.removeItem('red')
});

// --------------------------------------------------------------------------Search
const search = document.getElementById('searchIn');
const elements = document.querySelector('.container');

    search.addEventListener("input", () => {
        const val = search.value.toUpperCase();
        const elems = elements.querySelectorAll(".icon");

        for (const el of elems){
                const text = el.innerText;

            if(text.toUpperCase().includes(val)){
                el.style.setProperty("display", "");
            } else{
                el.style.setProperty("display", "none");
            }
        }
    });

    // -----------------------------------------------------------------Segregation
const programs = document.querySelectorAll('.program');
const games = document.querySelectorAll('.game');

const programsBtn = document.querySelector('.btn-programs');
const gamesBtn = document.querySelector('.btn-games');
const allBtn = document.querySelector('.btn-all');

programsBtn.addEventListener('click', () => {
    programsBtn.classList.add('active');
    gamesBtn.classList.remove('active');
    allBtn.classList.remove('active');
    for (const el of games){
        el.style.display = "none";
    }
    for (const el of programs) {
            el.style.display = "block";
    }
});

gamesBtn.addEventListener('click', () =>{
    gamesBtn.classList.add('active');
    programsBtn.classList.remove('active');
    allBtn.classList.remove('active');
    for (const el of programs) {
        el.style.display = "none";
    }
    for (const el of games) {
        el.style.display = "block";
    }
});

allBtn.addEventListener('click', () => {
    allBtn.classList.add('active');
    programsBtn.classList.remove('active');
    gamesBtn.classList.remove('active');
    for (const el of programs) {
        el.style.display = "block";
    }
    for (const el of games) {
        el.style.display = "block";
    }
});

// --------------------------------------------------------------------Burger
const burger = document.querySelector('.burger');
const searchCon = document.querySelector('.search');
const colChange = document.querySelector('.col-change')
let menuOpen = false;
burger.addEventListener('click', () => {
    if(!menuOpen) {
        burger.classList.add('active');
        searchCon.classList.add('active');
        colChange.classList.add('active');
        menuOpen = true;
    } else{
        burger.classList.remove('active');
            searchCon.classList.remove('active');
            colChange.classList.remove('active');
            menuOpen = false;
        }
    });
    
    
