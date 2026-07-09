import { ProjectPage } from "../../../src/views/ProjectPage";
import { projects } from "../../../src/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Intent Studio`,
    description: project.description,
  };
}

export default function Page() {
  return <ProjectPage />;
}
