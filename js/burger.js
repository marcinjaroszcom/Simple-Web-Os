const burger = document.querySelector('.burger');
const searchCon = document.querySelector('.search');
const colChange = document.querySelector('.col-change')
let menuOpen = false;
burger.addEventListener('click', () => {
    if (!menuOpen) {
        burger.classList.add('active');
        colChange.classList.add('active2');
        menuOpen = true;
    } else {
        burger.classList.remove('active');
        colChange.classList.remove('active2');
        menuOpen = false;
    }
});