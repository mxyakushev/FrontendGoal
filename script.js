const dayTime = document.querySelector('.day');
const hourTime = document.querySelector('.hour');
const minuteTime = document.querySelector('.minute');
const secondTime = document.querySelector('.second');

let len = [];

const countdown = () => {
    const countTime = new Date('November 28, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countTime - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    dayTime.innerText = Math.floor(gap / day);
    hourTime.innerText = Math.floor((gap % day ) / hour);
    minuteTime.innerText = Math.floor((gap % hour ) / minute);
    secondTime.innerText = Math.floor((gap % minute ) / second);

    len = [dayTime, hourTime, minuteTime, secondTime]

    len.forEach((element) => {
        if(element.innerText.length < 2){
            element.innerText = '0' + element.innerText;
        }
    })
    
}

setInterval(countdown, 1000);