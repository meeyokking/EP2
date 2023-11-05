const timeEl = document.getElementById("time");

function getCurrentTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML = `${hours} : ${minutes} : ${seconds}`
}
setInterval(getCurrentTime,1000)