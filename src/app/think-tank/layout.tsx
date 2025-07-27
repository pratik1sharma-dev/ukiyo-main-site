import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Think Tank | Ukiyo Habitat',
  description: 'Research, insights, and thought leadership on urban design, architecture, and sustainability.',
};

export default function ThinkTankLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {children}
    </div>
  );
}
