import { ServicePage } from "../../../src/views/ServicePage";
import { services } from "../../../src/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = services.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Intent Studio`,
    description: project.description,
  };
}

export default function Page() {
  return <ServicePage />;
}
