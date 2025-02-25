import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Mi5Star Security',
  description: 'Learn about Mi5Star\'s legacy of excellence in elite security services and our commitment to protecting what matters most.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900">
      {children}
    </div>
  );
} 