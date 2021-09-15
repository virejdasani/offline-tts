# offline-tts

## Installation
```
$ npm i offline-tts
```

## Usage
```js
speak(text, voice, speed, volume, pitch)

```
### Defaults
- voice = 0
- speed = 1
- volume = 1
- pitch = 1

## Example
```js
import speak from "offline-tts";

// The text will be said with voice[2], a speed of 1.5, a volume of 0.8 and a pitch of 0.6
speak("Hello world, this is offline text to speech!", 2, 1.5, 0.8, 0.6);

```

## React Example
```js
import speak from "offline-tts";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          speak(
          	// text
            "hi there, how are you. This is offline text to speech!",
            // voice
            2,
            // speed
            1.5,
            // volume
            0.8,
            // pitch
            0.6
          );
        }}
      >
        speak
      </button>
    </div>
  );
}
```