const speak = (text, voice = 0, speed = 1, volume = 1, pitch = 1) => {
  var speech = new SpeechSynthesisUtterance(text);

  speech.voice = speechSynthesis.getVoices()[voice];
  speech.rate = speed;
  speech.volume = volume;
  speech.pitch = pitch;

  return synthesis.speak(speech);
};

const pauseSpeech = () => {
  return speechSynthesis.pause();
};

const resumeSpeech = () => {
  return speechSynthesis.resume();
};

const stopSpeech = () => {
  return speechSynthesis.cancel();
};

module.exports = speak;
module.exports = pauseSpeech;
module.exports = resumeSpeech;
module.exports = stopSpeech;
