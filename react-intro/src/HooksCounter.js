import { useState } from 'react';

export default function HooksCounter() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
	}

	return (
		<div>
			<p>{counter}</p>
			<button
				onClick={handleClick}>
				Click to Increment
			</button>
		</div>
	);
}

