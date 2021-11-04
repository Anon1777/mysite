/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ms = today.getMilliseconds();
    let d = today.getDay();
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    document.getElementById('clock').innerHTML = d + ":" + h + ":" + m + ":" + s + "." + ms;
    setTimeout(startTime, 1);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



