const startBtn = document.querySelector('.start-btn');

const pauseBtn = document.querySelector('.pause-btn');

const resetBtn = document.querySelector('.reset-btn');

const startingMinutes = document.querySelector('#countdown-input').value = '10';
console.log(startingMinutes);

let time = startingMinutes * 60;
console.log(time);

const countdownEl = document.getElementById('countdown');

let startCountdown;

let minutes = 0;

let seconds = 0;

function updateCountdown() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

startBtn.addEventListener('click', () => {

    startCountdown = setInterval(updateCountdown, 1000);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(startCountdown);
});

resetBtn.addEventListener('click', () => {
    clearInterval(startCountdown);
    time = startingMinutes * 60
    minutes = 0;
    seconds = 0;
    countdownEl.innerHTML = `${minutes} : 0${seconds}`;
})

