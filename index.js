var TIMEOUT_IN_SECS = 3 * 60
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "height: 50px;\
                                      width: 100px;\
                                      position: fixed;\
                                      top: 50px;\
                                      left: 21px;\
                                      font-size: 50px;\
                                      z-index: 1000;")

var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs()

function displayAlert(){
    alert("Это скучная статья! Мне она надоела. Пожалуйста выберите другую.:)")
    setTimeout(displayAlert, 30000);
}

function displayTimer(){
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}
setInterval(displayTimer, 300)
setTimeout(displayAlert, TIMEOUT_IN_SECS * 1000);
