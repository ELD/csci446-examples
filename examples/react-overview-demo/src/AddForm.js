import { useState } from "react";

const AddForm = ({ handleSubmit }) => {
  const [formState, setFormState] = useState({ description: '', completed: false });
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit({ description: formState.description, completed: formState.completed });
      setFormState({ description: '', completed: false });
    }}>
      <input type="text" value={formState.description} onChange={(e) => setFormState({ ...formState, description: e.target.value })} />
      <br />
      <input type="checkbox" value={formState.completed} onChange={(e) => setFormState({ ...formState, completed: e.target.value })} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddForm;
