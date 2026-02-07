import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutWrapperProps {
  children: ReactNode;
  onOpenSecondOpinion: () => void;
}

export function LayoutWrapper({ children, onOpenSecondOpinion }: LayoutWrapperProps) {
  const location = useLocation();
  
  // Don't wrap SEO routes with layout
  const isSEORoute = location.pathname === '/robots.txt' || location.pathname === '/sitemap.xml';
  
  if (isSEORoute) {
    return <>{children}</>;
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation onOpenSecondOpinion={onOpenSecondOpinion} />
      {children}
      <Footer />
    </div>
  );
}
