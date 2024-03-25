import { useState } from "react"
import { BASE_URL } from "./utils";
import { Link } from "react-router-dom";

export default function CreateForm() {
	const initialFormData = {
		title: '',
		completed: false,
	};

	const initialResultMessage = {
		msg: '',
		newId: null,
	};
	// INFO: Rather than use separate hooks, let's jam the state together
	const [formData, setFormData] = useState(initialFormData);
	const [message, setMessage] = useState(initialResultMessage);

	const handleChange = (event) => {
		const type = event.target.type;
		switch (type) {
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

	const handleSubmit = async (event) => {
		event.preventDefault();
		// TODO: Let's fill this in together
		const result = await fetch(`${BASE_URL}/projects`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		if (result.status !== 201) {
			setMessage({ msg: "Failed to create new whatever...", newId: null });
			return;
		}

		const newId = await result.json();
		setMessage({ msg: "Successfully created!", newId });
		setFormData(initialFormData);
	}

	return (
		<>
			{message.msg ?
				<>
					<label>{message.msg}</label>
					<Link to={`/projects/${message.newId}`}>Newly created whatever</Link>
				</>
				: null
			}
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input type="text" placeholder="Title" value={formData.title} onChange={handleChange} />
				<br />
				<label>Completed</label>
				<input type="checkbox" checked={formData.completed} onChange={handleChange} />
				<br />
				<button type="submit">Create</button>
			</form>
		</>
	)
}

