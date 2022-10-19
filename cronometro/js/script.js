// Cliccando su un pulsante, viene avviato un cronometro.
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante.

// Al click sul start button, far partire il timer
// Al click sullo stop, stoppare il timer

let timer = 1;
let timerInterval;
let timerIsRunning = false;
const timerElement = document.getElementById("timer");

const startButton = document.getElementById("start");
startButton.addEventListener("click", initTimer); 

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopTimer);

/**
 * Description: Funzione che fa partire timer
 */
function initTimer() {
    // Se il timer non sta andando avanti, lo faccio partire e segnalo che il timer è partito
    if (!timerIsRunning) {
        timerInterval = setInterval(function() {
            timerElement.innerHTML = timer;
            timer++;
        }, 1000);
        timerIsRunning = true;
    }
    
}

function stopTimer() {
    // timer = 0;
    // timerElement.innerHTML = timer;
    timerIsRunning = false;
    clearInterval(timerInterval);
}