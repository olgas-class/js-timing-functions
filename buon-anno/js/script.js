// BUON ANNO
// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
// 10
// 9
// 8
//...
// Buon anno!

const title = document.querySelector("h1");
let count = 10;

const counter = setInterval(function() {
    if (count > 0) {
        title.innerHTML = count;
        count--;
    } else {
        title.innerHTML = "Buon anno!";
        clearInterval(counter);
    }
}, 1000);