import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article | Ukiyo Habitat Think Tank',
  description: 'Insights and research from Ukiyo Habitat',
};

export default function ThinkTankItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f9f7f4] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
