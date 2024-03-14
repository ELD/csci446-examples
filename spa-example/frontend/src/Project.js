import { useLoaderData } from "react-router-dom";

async function loadProject(request) {
	console.log(request);
	const projectId = request.params.projectId;
	const response = await fetch(`http://localhost:3001/projects/${projectId}`);
	return await response.json();
}

export default function Project() {
	const project = useLoaderData();

	return (
		<article>
			<h1>{project.title}</h1>
			<p>{project.description}</p>
		</article>
	)
}

export { loadProject };

