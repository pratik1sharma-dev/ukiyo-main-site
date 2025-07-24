import { Metadata } from 'next';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return children;
}
