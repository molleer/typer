import { useState } from "react";
import "./App.css";
import TextField from "./components/textfield";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TextField
        value={input}
        onChange={value => {
          if (value.endsWith(" ")) setInput("");
          else setInput(value);
        }}
      />
    </div>
  );
};

export default App;
