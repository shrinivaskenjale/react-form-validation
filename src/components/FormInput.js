import { useState } from "react";
import "./FormInput.css";

const FormInput = ({ label, errorMessage, ...inputProps }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  // If input is loses focus, set isBlurred to true.
  const handleBlur = () => {
    setIsBlurred(true);
  };

  // Optional - If the last input is focused, mark it as blurred so that we will see the errors as soon as we focus this input
  // const handleFocus = (e) => {
  //   if (e.target.name === "confirmPassword") {
  //     setIsBlurred(true);
  //   }
  // };

  return (
    <div className="form-input">
      <label htmlFor={inputProps.id}>{label}</label>
      <input
        {...inputProps}
        blurred={String(isBlurred)}
        onBlur={handleBlur}
        // onFocus={handleFocus}
      />
      <small>{errorMessage}</small>
    </div>
  );
};
// Note - We show error messages for the inputs which were focused before and are invalid.
// To achieve this we add custom attribute "blurred" to DOM and use it inside css using attribute selector.

export default FormInput;
