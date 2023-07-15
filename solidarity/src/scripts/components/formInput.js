import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, type, options, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  if (type === "select") {
    return (
      <div className="formInput">
        <label>{label}</label>
        <select {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} type={type} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
    </div>
  );
};

export default FormInput;
