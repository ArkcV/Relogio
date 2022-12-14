const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const s = document.querySelector('.s');

const clockTime = setInterval(function (){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10) {hours = '0' + hours}
    if(minutes < 10) {minutes ='0' + minutes}
    if(seconds < 10) {seconds = '0' + seconds}

    hr.textContent = hours;
    mn.textContent = minutes;
    s.textContent = seconds;
});