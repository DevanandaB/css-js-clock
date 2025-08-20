const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const current = new Date;
    const seconds = current.getSeconds();
    const secondsDegrees = (( seconds / 60 ) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = current.getMinutes();
    const minutesDegrees = (( minutes / 60 ) * 360 ) + 90;  
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = current.getHours();
    const hoursDegrees = (( hours / 12 ) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);