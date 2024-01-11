const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours();

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();