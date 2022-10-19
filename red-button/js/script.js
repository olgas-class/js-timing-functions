// RED BUTTON
// Al click sul bottone, il testo deve diventare rosso dopo 2 secondi

document.querySelector("button").addEventListener("click", function() {
    setTimeout(() => {
        console.log(this);
        this.style.color = "red";
    }, 2000)
});