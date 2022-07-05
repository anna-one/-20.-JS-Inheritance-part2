const timeInP = document.getElementById('time');
let currentClock;

class Clock {
    getDataTime() {
        const date = new Date();
        return date.toString();
    };

}
const render = () => { timeInP.innerText = currentClock.getDataTime() }
let clock = new Clock();

timeInP.addEventListener('click', () => {
    if (currentClock === shortClock) {
        currentClock = fullClock;
    } else {
        currentClock = shortClock
    }
    render()
});
setInterval(() => { render() }, 1000);



class ShortClock extends Clock {
    getDataTime() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();

        const format = `${hour} : ${minute}`;
        return format;
    }
}

let shortClock = new ShortClock();


class FullClock extends Clock {
    getDataTime() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const format = `${hour} : ${minute} : ${second}`;
        return format;
    }
}

let fullClock = new FullClock();

currentClock = fullClock;