import { useState } from "react";
import "./App.css";
import TextField from "./components/textfield";
import Word from "./components/word";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const App = () => {
  const [words, setWords] = useState(
    [...text.toLowerCase()]
      .filter(e => e.match(/[a-z+A-Z ]/))
      .join("")
      .split(" ")
      .map(e => ({ expected: e, got: "" })),
  );
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const space = () => {
    const tmp = [...words];
    tmp[count].got = input;
    tmp[count].done = true;
    setWords(tmp);
    setInput("");
    setCount(count + 1);
  };

  return (
    <div className="center">
      <div className="wordBox">
        {words.map((word, i) => (
          <Word
            key={i}
            {...word}
            current={i === count}
            got={i === count ? input : word.got}
          />
        ))}
      </div>
      <TextField
        value={input}
        onChange={value => {
          if (value.endsWith(" ")) space();
          else setInput(value);
        }}
      />
    </div>
  );
};

export default App;
