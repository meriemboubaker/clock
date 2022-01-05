setInterval(setClock,1000)
setInterval(displayTime,1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
function setClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60;
    const minutes = (seconds+currentDate.getMinutes())/60
    const hours = (minutes+currentDate.getHours())/12
    setRotation(secondHand, seconds)
    setRotation(minuteHand, minutes)
    setRotation(hourHand, hours)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
 function displayTime(){
    const currentDate = new Date();
    const secs = (currentDate.getSeconds()<10?'0':'') + currentDate.getSeconds()
    const mins = (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes()
    const hrs = (currentDate.getHours()<10?'0':'') + currentDate.getHours()
    const session = document.getElementById('session')
    if(hrs>=12){
        session.innerHTML='PM'
    }
    else{
        session.innerHTML='AM'
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=mins;
    document.getElementById('seconds').innerHTML=secs;
 }