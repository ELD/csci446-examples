import { useState } from "react";

function Form({ onSubmit, children }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      {children}
      {/* <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>{buttonText}</button> */}
    </form>
  );
}

function TextInput({ value, mutateValue }) {
  return <input type="text" value={value} onChange={mutateValue} />;
}

function Button({ children }) {
  return <button type="submit">{children}</button>;
}

Form.TextInput = TextInput;
Form.Button = Button;

export default Form;
