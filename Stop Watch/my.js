let secondsCount = 3650;
let timeSpace = document.getElementById('timeDisplay');
let interval = 0;

function padStart(value){
    return String(value).padStart(2,0);
}

function setTime(){
    const hours = Math.floor(secondsCount / 3600);
    let minutes = Math.floor(secondsCount / 60);
    minutes = minutes % 60;
    const seconds = (secondsCount % 60);
    timeSpace.innerHTML = `${padStart(hours)} : ${padStart(minutes)} : ${padStart(seconds)}`
}

function secondsInc(){
    secondsCount++;
    setTime();
}

function startClock(){
    if(interval) stopClock();
    interval = setInterval(secondsInc,1000);
}

function stopClock(){
    clearInterval(interval);
}

function resetClock(){
    secondsCount = 0;
    setTime();
    clearInterval(interval);
}