import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageTemplateProps {
  title: string;
  children: ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-dark-950 bg-gradient-radial from-dark-900 to-dark-950">
      <Navigation />
      <main>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-12">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}