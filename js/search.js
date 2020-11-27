const search = document.getElementById('searchIn');
const elements = document.querySelector('.container');

search.addEventListener("input", () => {
    const val = search.value.toUpperCase();
    const elems = elements.querySelectorAll(".icon");

    for (const el of elems) {
        const text = el.innerText;

        if (text.toUpperCase().includes(val)) {
            el.style.setProperty("display", "");
        } else {
            el.style.setProperty("display", "none");
        }
    }
});