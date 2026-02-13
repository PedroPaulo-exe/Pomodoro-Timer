const display = document.getElementById('display');
const start = document.getElementById("btnStart");
const stop = document.getElementById("btnStop");
const reset = document.getElementById("btnReset");

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

let timer = null;
let minute = 0;
let second = 0;
let inicioTempo = 0;
let decorridoTempo = 0;
let running = false;

function startTimer(){
    if (!running){
        inicioTempo = Date.now() - decorridoTempo;
        timer = setInterval(update,10); 
        running = true;
    }

}

function stopTimer(){
    clearInterval(timer);
    decorridoTempo = atualTempo - inicioTempo;
    running = false;

}

function resetTimer(){
    clearInterval(timer);
    decorridoTempo = 0;
    inicioTempo = 0;
    running = false;
    display.textContent = "00:00:00";
}

function update(){
    let atualTempo = Date.now();
    const decorridoTempo = atualTempo - inicioTempo;
    let minute = Math.floor(decorridoTempo/(1000*60)%60);
    let second = Math.floor(decorridoTempo/1000%60);
    let milisecond = Math.floor(decorridoTempo%1000/10);

    minute = String(minute).padStart(2,"0");
    second = String(second).padStart(2,"0");
    milisecond = String(milisecond).padStart(2,"0");
    display.textContent = `${minute}:${second}:${milisecond}`;

}
 