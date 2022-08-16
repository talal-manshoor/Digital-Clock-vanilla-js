const background = document.getElementById("bbg");
let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliSeconds = date.getMilliseconds();
    let timePeriod = "AM";
    
    if (hours == 0) {
    hours = 12;
}
    else if (hours >= 12 ) {
    hours = hours - 12;
    timePeriod = "PM"
}

if(milliSeconds < 10 ){
    milliSeconds = `00${milliSeconds}`;
}
else(100>milliSeconds && milliSeconds>10)
{
    milliSeconds = `${milliSeconds}`;
}

    hours = 10 > hours ? `0${hours}` : hours;
    minutes = 10 > minutes ? `0${minutes}` : minutes;
    seconds = 10 > seconds ? `0${seconds}` : seconds;

    let time = `${hours} : ${minutes} : ${seconds} : ${milliSeconds} ${timePeriod}`;
    document.getElementById("clock").innerHTML = time;
    if(timePeriod == "AM"){
        if(hours>6){
            background.style.backgroundImage = "url('./morning.jpg')";    
        }else{
            background.style.backgroundImage = "url('./night.jpg')";
        }
    }else{
        if(hours<6){
        background.style.backgroundImage = "url('./noon.jpg')";
        }else{
            background.style.backgroundImage = "url('./evening.jpg')";
        }
    }
    setTimeout(clock , 1);
};
clock();