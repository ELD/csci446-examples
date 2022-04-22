import { useLoaderData, useTransition, Form, Link } from "@remix-run/react";
import type { LoaderFunction, Request } from "@remix-run/node";
import { json } from "@remix-run/node";
import db from "~/utils/db.server";

async function createProject(project: any) {
  const newProject = await db.project.create({
    data: {
      title: project.title?.toString(),
    },
  });
  return newProject;
}
async function getProjects() {
  return await db.project.findMany();
}

export const loader: LoaderFunction = async () => {
  const projects = await getProjects();
  const data = {
    projects,
  };
  return json(data);
};

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  return createProject({ title: form.get("title") });
}

export default function Projects() {
  const { projects } = useLoaderData();
  const { state } = useTransition();
  const busy = state === "submitting";

  return (
    <div>
      <ul>
        {projects.map((project: any) => (
          <li key={project.id}>
            <Link to={`/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>

      <Form replace method="post">
        <input name="title" />
        <button type="submit" disabled={busy}>
          {busy ? "Creating..." : "Create New Project"}
        </button>
      </Form>
    </div>
  );
}
