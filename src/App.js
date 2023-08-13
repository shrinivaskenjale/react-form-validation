import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  // Note - Properties in state object and name prop of inputs should have same name.
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Search on google for regex
  // We depend on :invalid state of input elements to show error messages. So we use built-in attributes of html inputs like pattern, required, type, min, max etc.
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3 to 16 characters and should not include any special character.",
      label: "Username",
      required: true,
      pattern: "^(?=.{3,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter valid email address.",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthDay",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8 to 20 characters and include at least 1 letter, 1 digit and 1 special character.",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match.",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const renderedInputs = inputs.map((input) => {
    return (
      <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={handleChange}
      />
    );
  });

  return (
    <section className="section form-section">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {renderedInputs}
        <div className="form-buttons">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default App;
