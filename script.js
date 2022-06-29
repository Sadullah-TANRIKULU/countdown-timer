const startBtn = document.querySelector('.start-btn');

const audio = document.querySelector('audio');

const pauseBtn = document.querySelector('.pause-btn');

const resetBtn = document.querySelector('.reset-btn');

let startingMinutes = document.querySelector('#countdown-input').value;
console.log(startingMinutes);

let time = startingMinutes * 60;
console.log(time);

let minutes = 0;

let seconds = 0;

const countdownEl = document.getElementById('countdown');

countdownEl.innerHTML = `0${minutes} : 0${seconds}`;


let startCountdown;



function updateCountdown() {
    
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;

    if (!time) {
        clearInterval(startCountdown);
        time = startingMinutes * 60
        minutes = 0;
        seconds = 0;
        countdownEl.innerHTML = `${minutes} : 0${seconds}`;
        audio.play();
    }
}

startBtn.addEventListener('click', () => {
    startingMinutes = document.querySelector('#countdown-input').value;
    startCountdown = setInterval(updateCountdown, 1000);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(startCountdown);
});

resetBtn.addEventListener('click', () => {
    clearInterval(startCountdown);
    time = startingMinutes * 60;
    minutes = 0;
    seconds = 0;
    countdownEl.innerHTML = `${minutes} : 0${seconds}`;
})

window.onload = () => {
    document.querySelector('#countdown-input').focus();
}

