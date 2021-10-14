import { useState } from "react";
import "./App.css";
import TextField from "./components/textfield";
import Word from "./components/word";

const text =
  "this is a simple paragraph that is meant to be nice and easy to type which is why there will be no commas no periods or any capital letter so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences this should help your get faster at typing as im trying not to use too many difficult words in it although i think the i might start making it harder by including some more difficult letters I'm typing pretty quickly so forgive me for an mistakes i think that i will not just tell you a story about the time i went to the zoo and found a monkey and a fox playing together they were so coyote and i think that they were not supposed to be in the same cage byt they somehow were and i loved watching them horse around forgive the pun well i hope that it has been highly enjoyable trying this paragraph and i wish you the best of luck getting the best score that you possibly can";
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
