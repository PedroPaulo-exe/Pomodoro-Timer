const btnSave = document.getElementById("btnSave");
const minutesForTimer  = document.getElementById("timerValue");
btnSave.addEventListener("click", SaveTimeFunction());
minutesForTimer.addEventListener("change", ChangeTheTimer());

function ChangeTheTimer(){
    const val = event.target.value;
    if (val < 1 || val > 60){
        minutesForTimer.value = 25;
    }
}

function SaveTimeFunction(){
    chrome.storage.local.set({
        timer: 0,
        minutesForTimer: minutesForTimer.value,
        isRunning: false,
    })    
}

chrome.storage.local.get(["minutesForTimer"], (res) => {
    minutesForTimer.value = res.minutesForTimer
})
