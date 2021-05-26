const timeElement = document.querySelector('.time')
const startStopButton = document.querySelector('.startStop')

let intervalId = null
let isStarted = false
let lastIntervalTime = null
let time = 0

function startStop(){
  if(isStarted) {
    stop()
  }else {
    start()
  }
}

function writeTime(){
  // @TODO display in 00:00:000 format
  const milliseconds = time / 1000
  timeElement.innerText = milliseconds.toFixed(3)
}

function tick(timestamp){
  if(!isStarted) return false
  const stepTime = lastIntervalTime ? timestamp - lastIntervalTime : 0

  time = time + stepTime
  writeTime()

  console.log(stepTime)

  lastIntervalTime = timestamp

  requestAnimationFrame(tick)
}

function start(){
  isStarted = true
  startStopButton.innerText = 'STOP'
  requestAnimationFrame(tick)
}

function stop(){
  isStarted = false
  startStopButton.innerText = 'START'
  lastIntervalTime = null
}

startStopButton.addEventListener(
  'click',
   startStop
)