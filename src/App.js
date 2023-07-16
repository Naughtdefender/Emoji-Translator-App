import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👇": "Backhand Index Pointing Down",
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "❤": "Red Heart"
};
var emojisKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This emoji is not in our Database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisKnow.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", cursor: "pointer", padding: "1rem" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
