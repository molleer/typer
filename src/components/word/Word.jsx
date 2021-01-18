import "./Word.style.css";
import * as prop from "prop-types";

const Word = ({ expected, got, current, done, ...props }) => {
  return (
    <span
      className="word"
      style={{
        ...props.style,
        color: current || !done ? "white" : expected !== got ? "red" : "green",
        backgroundColor: current
          ? expected.startsWith(got)
            ? "gray"
            : "red"
          : "transparent",
      }}
    >
      {expected}
    </span>
  );
};

Word.propTypes = {
  expected: prop.string,
  got: prop.string,
  current: prop.bool,
  done: prop.bool,
};

export default Word;
