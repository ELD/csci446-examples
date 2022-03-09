function AddTodo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text />
      <Form.Button>Submit Todo</Form.Button>
    </Form>
  );
}

function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

function Text() {
  return <input type="text" />;
}

function Button({ children }) {
  return <button>{children}</button>;
}

Form.Text = Text;
Form.Button = Button;

export default AddTodo;
