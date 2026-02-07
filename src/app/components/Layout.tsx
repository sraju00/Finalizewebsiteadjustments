import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onOpenSecondOpinion: () => void;
}

export function Layout({ children, onOpenSecondOpinion }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation onOpenSecondOpinion={onOpenSecondOpinion} />
      {children}
      <Footer />
    </div>
  );
}
