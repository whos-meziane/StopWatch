let start = document.querySelector('.js-start');
let stopt = document.querySelector('.js-stop');
let reset = document.querySelector('.js-reset');
let display = document.querySelector('.display-screen');

let ms = 0;
let sec = 0;
let min = 0;

let timerId;


function startTimer(status) {
    if (status) {
        start.disabled = true;
    }

    timerId = setTimeout(() => {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);

        ms++;

        if (ms === 100) {
            sec += 1;
            ms = 0;
        }
        if (sec === 60) {
            min += 1;
            sec = 0;
            ms = 0; 
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec; 
        }
        if (min < 10) {
            min = '0' + min;
        }

        display.innerHTML = min + ':' + sec + ':' + ms;

        startTimer();
    }, 10)
}

function stopTimer() {
    clearTimeout(timerId);
    start.disabled = false;
}

function resetTimer() {
    ms = 0;
    sec = 0;
    min = 0;

    start.disabled = false;

    clearTimeout(timerId);
    display.innerHTML = '00:00:00';
}
