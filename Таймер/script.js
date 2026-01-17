const startButtonSelector = ".button__start"
const stopButtonSelector = ".button__stop"
const hoursInputSelector = "#hours"
const minuteInputSelector = "#minutes"
const secondsInputSelector = "#seconds"

const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minuteInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

const delaySeconds = 1;

let remainingTime;
let intervalId;

let hours;
let minutes;
let seconds;

function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minutes * 60 + seconds;

    intervalId = setInterval(updateTimer, delaySeconds * 1000);

    startButton.classList.add('hide');
    document.documentElement.requestFullscreen();
    stopButton.classList.remove('hide');
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
    
        hours = Math.floor(remainingTime / 3600);
        minutes = Math.floor(remainingTime % 3600 / 60);
        seconds = remainingTime % 60;

        hoursInput.value = hours.toString().padStart(2, "0");
        minutesInput.value = minutes.toString().padStart(2, "0");
        secondsInput.value = seconds.toString().padStart(2, "0");
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
    document.exitFullscreen();
    stopButton.classList.add('hide');
    startButton.classList.remove('hide')
}



startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);