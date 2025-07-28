import { Metadata } from 'next';

// This function generates metadata for the dynamic project page
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // In a real app, you would fetch the project data here
  // const project = await getProjectById(params.id);
  
  return {
    title: `Project ${params.id} | Ukiyo Habitat`,
    description: `Details about project ${params.id} at Ukiyo Habitat`,
    // Uncomment and modify these when you have actual project data:
    // title: `${project.title} | Ukiyo Habitat`,
    // description: project.description || `Details about ${project.title} project`,
  };
}
