const speak = (text, voice = 0, volume = 1, rate = 1, pitch = 1) => {
  let speech = window.speechSynthesis
  let utterance = new SpeechSynthesisUtterance(text)

  utterance.voice = speechSynthesis.getVoices()[voice];
  utterance.rate = rate
  utterance.pitch = pitch
  utterance.volume = volume
  speech.cancel()
  
  return speech.speak(utterance)
}

module.exports = speak