// BUTTA LA PASTA
// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert().

function alertUser() {
    alert("Butta la pasta!");
}

const userSeconds = parseInt(prompt("Quanti secondi mancano?"));
console.log(userSeconds);
const userMilSeconds = userSeconds * 1000;
console.log(userMilSeconds);

setTimeout(alertUser, userMilSeconds);