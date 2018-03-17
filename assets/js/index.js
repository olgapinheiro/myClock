let pointerSec = document.querySelector('.pointer-sec');
let pointerMin = document.querySelector('.pointer-min');
let pointerHour = document.querySelector('.pointer-hour');

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    pointerSec.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    pointerMin.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    pointerHour.style.transform = `rotate(${hoursDegrees}deg)`

    if (secondsDegrees === 90) {
        pointerSec.style.transition = 'none';
    }
}

setInterval(setDate, 1000);