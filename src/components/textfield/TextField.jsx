import "./TextField.style.css";
import * as prop from "prop-types";

const TextField = ({ value, onChange, ...props }) => {
  return (
    <input
      {...props}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="textfield"
      type="text"
    />
  );
};

TextField.defaultProps = {
  value: "",
  onChange: () => {},
};

TextField.propTypes = {
  value: prop.string,
  onChange: prop.func,
};

export default TextField;
