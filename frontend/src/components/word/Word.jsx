import "./Word.style.css";

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

export default Word;
