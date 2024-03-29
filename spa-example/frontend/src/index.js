import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateForm from "./CreateForm";
import Listing from "./Listing";
import Listing2, { loadProjects } from "./Listing2";
import Project, { loadProject } from "./Project";

// Using the createBrowserRouter method to create the router provider
// It takes a list of objects representing the routes in the application
// Nesting routes via the `children` property embeds the rendered `element`s. So, for example
// `<App />` will render as a wrapper around the `<CreateForm />` or `<Listing />` components for
// those matching routes.
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/projects/new",
				element: <CreateForm />,
			},
			{
				path: "/projects",
				element: <Listing2 />,
				loader: loadProjects,
			},
			{
				path: "/projects-do-not-use",
				element: <Listing />,
			},
			{
				path: "/projects/:projectId",
				element: <Project />,
				loader: loadProject,
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
