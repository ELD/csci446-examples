import { useState } from "react"

export default function CreateForm() {
  const initialFormData = {
    title: '',
    completed: false,
  };
  // INFO: Rather than use separate hooks, let's jam the state together
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const type = event.target.type;
    switch(type) {
      case 'checkbox':
        // INFO: Spread the existing formData first, then update the specific value
        // WARN: Spreading overwrites any values in the object literal, so the reverse would cause an error
        setFormData({
          ...formData,
          completed: event.target.checked,
        });
      break;
      case 'text':
        setFormData({
          ...formData,
          title: event.target.value,
        });
      break;
      default:
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Let's fill this in together
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" placeholder="Title" value={formData.title} onChange={handleChange} />
      <br />
      <label>Completed</label>
      <input type="checkbox" checked={formData.completed} onChange={handleChange} />
      <br />
      <button type="submit">Create</button>
    </form>
  )
}

