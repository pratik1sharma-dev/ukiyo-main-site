// src/app/projects/[id]/layout.tsx

import { ReactNode } from 'react';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function ProjectLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  return <>{children}</>;
}
