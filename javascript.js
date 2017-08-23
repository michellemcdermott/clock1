window.onload=digitalClock(0, "clock");
window.onload=digitalClock(-7,"clockNy");
window.onload=digitalClock(+8, "tokyo");

setInterval(localClock, 1000); //this is a method that calls a function repeatedly after
                // a certain amount of time
function localClock(){
  digitalClock(0,"clock");
  digitalClock(-7,"clockNy")
  digitalClock(8,"tokyo")  
}
function digitalClock(timeOffSet, target){ //timeOffSet is the hours, Target is the location it will go
    var currentTime = new Date(); //this is a variable that will store the current time

    if (!isNaN(timeOffSet)){
    currentTime.setHours(currentTime.getHours() + timeOffSet);
}   

    var hours = currentTime.getHours(); //this variable getHours is a method that used with date objects
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.getDay();
    var days=["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var meridiem = "AM";

    if (hours >12){
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours === 0) {
        hours = 12;    
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (hours < 10){
        hours = "0" + hours
    }
  
    var clockDiv = document.getElementById(target);//this gets a handle to the clock div in our HTML
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem + "\n" + days[day];
}
