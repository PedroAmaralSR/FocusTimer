
const audioFloest = document.querySelector('.forest-audio')
const audioRain = document.querySelector('.rain-audio')
const audioStore = document.querySelector('.store-audio')
const audioFireplace = document.querySelector('.fireplace-audio')

export default function Sounds() {
  // const florest = new Audio("./audio/rain.wav")
  // const rain = new Audio("./audio/rain.wav")
  // const store = new Audio("./audio/rain.wav")
  // const fireplace = new Audio("./audio/rain.wav"
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  audioFloest.loop = true 
  audioRain.loop = true
  audioStore.loop = true
  audioFireplace.loop = true
 

  function pressButton(){
    buttonPress.play()
  }

  

  return {
    pressButton,
    audioFloest,
    audioRain,
    audioStore,
    audioFireplace
  }

}
