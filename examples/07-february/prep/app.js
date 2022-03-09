const App = ({ children }) => {
  return (
    <>
      <h1>Welcome to my first React app!</h1>
      {children}
    </>
  );
};

const Form = () => {
  const [textInput, setTextInput] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);
    console.log(textInput);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={textInput}
        onChange={handleTextChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

console.log(App({ children: undefined }));

ReactDOM.render(
  <App>
    <Form />
  </App>,
  document.getElementById("reactRoot")
);
