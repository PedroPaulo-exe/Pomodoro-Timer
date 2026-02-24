const start = document.getElementById("btnStart");
const reset = document.getElementById("btnReset");
const display = document.getElementById("display");
const ChooseTimer = document.getElementById("btnTimer");

ChooseTimer.addEventListener("click", ChoseTimerPage);
start.addEventListener("click", startTimer());
reset.addEventListener("click", resetTimer());

display.innerHTML = (timerValue != 0 || null) ? "25:00":timerValue;

function ChoseTimerPage(){
    window.location.href = "ChooseTheTime/test.html";
}

let timer = timerValue;
let running = false;


