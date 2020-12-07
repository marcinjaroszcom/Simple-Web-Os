const burger = document.querySelector('.burger');
const seacrhBtn = document.querySelector('.search-btn');
const searchCon = document.querySelector('.search');
const colChange = document.querySelector('.col-change')
let menuOpen = false;
burger.addEventListener('click', () => {
    if (!menuOpen) {
        burger.classList.add('active');
        searchCon.classList.add('active');
        colChange.classList.add('active');
        menuOpen = true;
    } else {
        burger.classList.remove('active');
        searchCon.classList.remove('active');
        colChange.classList.remove('active');
        menuOpen = false;
    }
});
seacrhBtn.addEventListener('click', () =>{
    burger.classList.remove('active');
    searchCon.classList.remove('active');
    colChange.classList.remove('active');
    menuOpen = false;
});