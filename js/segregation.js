const programs = document.querySelectorAll('.program');
const games = document.querySelectorAll('.game');

const programsBtn = document.querySelector('.btn-programs');
const gamesBtn = document.querySelector('.btn-games');
const allBtn = document.querySelector('.btn-all');

programsBtn.addEventListener('click', () => {
    programsBtn.classList.add('active');
    gamesBtn.classList.remove('active');
    allBtn.classList.remove('active');
    for (const el of games) {
        el.style.display = "none";
    }
    for (const el of programs) {
        el.style.display = "block";
    }
});

gamesBtn.addEventListener('click', () => {
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