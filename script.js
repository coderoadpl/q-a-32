const timeElement = document.querySelector('.time')
const startStopButton = document.querySelector('.startStop')

let intervalId = null
let isStarted = false
let time = 0

function startStop(){
  if(isStarted) {
    stop()
  }else {
    start()
  }
}

function writeTime(){
  const milliseconds = time / 1000
  timeElement.innerText = milliseconds.toFixed(3)
}

function tick(){
  time = time + 1
  writeTime()
}

function start(){
  isStarted = true
  startStopButton.innerText = 'STOP'
  intervalId = setInterval(tick, 1)
}

function stop(){
  isStarted = false
  startStopButton.innerText = 'START'
  if(intervalId) clearInterval(intervalId)
}

startStopButton.addEventListener(
  'click',
   startStop
)