import Sounds from './sounds.js'
const Controls = {
  buttonPlay: document.querySelector('.play'),
  buttonPause: document.querySelector('.pause'),
  buttonStop: document.querySelector('.stop'),
  buttonSet: document.querySelector('.set'),
  buttonSoundOn: document.querySelector('.sound-on'),
  buttonSoundOff: document.querySelector('.sound-off'),

  openClosePlayPause: () => {
    Controls.buttonPlay.classList.toggle('hide')
    Controls.buttonPause.classList.toggle('hide')
  },
  stopSetPlay: () => {
    Controls.buttonSet.classList.add('hide')
    Controls.buttonStop.classList.remove('hide')
  },
  openCloseStopSet: () => {
    Controls.buttonStop.classList.toggle('hide')
    Controls.buttonSet.classList.toggle('hide')
  },
  openCloseSoundOnSoundOff: () => {
    Controls.buttonSoundOn.classList.toggle('hide')
    Controls.buttonSoundOff.classList.toggle('hide')
  }
}
let timerTimerOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const forestDisplay = document.querySelector('.forest')
const rainDisplay = document.querySelector('.rain')
const storeDisplay = document.querySelector('.store')
const fireplaceDisplay = document.querySelector('.Fireplace')
let buttonMore = document.querySelector('.more')
let buttonLess = document.querySelector('.less')

let minutes = Number(minutesDisplay.textContent)

const sound = Sounds()

const soundPlayPause = {
  playForest: () => {
    sound.audioFloest.play()
    sound.audioRain.pause()
    sound.audioStore.pause()
    sound.audioFireplace.pause()

    forestDisplay.classList.add('colorButton')
    rainDisplay.classList.remove('colorButton')
    storeDisplay.classList.remove('colorButton')
    fireplaceDisplay.classList.remove('colorButton')
  },
  playRain: () => {
    sound.audioFloest.pause()
    sound.audioRain.play()
    sound.audioStore.pause()
    sound.audioFireplace.pause()

    forestDisplay.classList.remove('colorButton')
    rainDisplay.classList.add('colorButton')
    storeDisplay.classList.remove('colorButton')
    fireplaceDisplay.classList.remove('colorButton')
  },
  playStore: () => {
    sound.audioFloest.pause()
    sound.audioRain.pause()
    sound.audioStore.play()
    sound.audioFireplace.pause()

    forestDisplay.classList.remove('colorButton')
    rainDisplay.classList.remove('colorButton')
    storeDisplay.classList.add('colorButton')
    fireplaceDisplay.classList.remove('colorButton')
  },
  playFireplace: () => {
    sound.audioFloest.pause()
    sound.audioRain.pause()
    sound.audioStore.pause()
    sound.audioFireplace.play()

    forestDisplay.classList.remove('colorButton')
    rainDisplay.classList.remove('colorButton')
    storeDisplay.classList.remove('colorButton')
    fireplaceDisplay.classList.add('colorButton')
  }
}


function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function increaseTimer(minutes) {
  return minutes + 5
}

function decreaseTimer(minutes) {
  return minutes - 5
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      Controls.openClosePlayPause()
      Controls.openCloseStopSet()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    let subtractionTimer = decreaseTimer(minutes)
    let sumTimer = increaseTimer(minutes)

    buttonMore.onclick = () => {
      if (minutesDisplay.textContent == 0) {
        sumTimer = increaseTimer(minutes * 0)
        updateTimerDisplay(minutes, 0)
      }

      updateTimerDisplay(sumTimer, 0)
    }
    buttonLess.onclick = () => {
      if (subtractionTimer <= 0) {
        updateTimerDisplay(0, 0)
        return
      }

      updateTimerDisplay(subtractionTimer, 0)

      console.log(subtractionTimer)
    }

    countdown()
  }, 1000)
}

// function togglePlay(myAudio) {
//   return myAudio.paused ? myAudio.play() : myAudio.pause();
// }

Controls.buttonPlay.onclick = () => {
  Controls.openClosePlayPause()
  Controls.stopSetPlay()
  countdown()
  sound.pressButton()
}

Controls.buttonPause.onclick = () => {
  Controls.openClosePlayPause()
  clearTimeout(timerTimerOut)
  sound.pressButton()
}

Controls.buttonStop.addEventListener('click', function () {
  console.log(minutesDisplay.textContent)
  Controls.openCloseStopSet()
  Controls.buttonPlay.classList.remove('hide')
  Controls.buttonPause.classList.add('hide')
  console.log(minutes)
  resetTimer()
  sound.pressButton()
})

Controls.buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('digite os minutos')

  if (!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes

  updateTimerDisplay(minutes, 0)
})

/*buttonMore.onclick = () => {
  console.log(minutesDisplay)
  let minutes = Number(minutesDisplay.textContent)
  console.log(minutes)
  let sumTimer = increaseTimer(Number(minutes))
  updateTimerDisplay(sumTimer, 0)
  
  console.log(typeof(sumTimer))

}*/
/*buttonLess.onclick = () => {
  
  minutes = Number(minutesDisplay.textContent)
  
  let subtractionTimer = decreaseTimer(minutes)

  updateTimerDisplay(subtractionTimer, 0)

}*/

forestDisplay.addEventListener('click', function () {
  soundPlayPause.playForest()
})
rainDisplay.addEventListener('click', function () {
  soundPlayPause.playRain()
})
storeDisplay.addEventListener('click', function () {
  soundPlayPause.playStore()
})
fireplaceDisplay.addEventListener('click', function () {
  soundPlayPause.playFireplace()
})

// console.log(typeof(minutes))
