import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import interoLogo from 'figma:asset/873cfa9afb9f35b2a14375f55ed7c80fb28d0b18.png';

interface NavigationProps {
  onOpenSecondOpinion?: () => void;
}

export function Navigation({ onOpenSecondOpinion }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (onOpenSecondOpinion) {
      onOpenSecondOpinion();
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">{/* Increased from h-16 to h-20 */}
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-bold">
              <span className="text-gray-900">SellWithRaj</span>
              <span className="text-blue-600">Now</span>
              <span className="text-gray-900">.com</span>
            </Link>
            <img 
              src={interoLogo} 
              alt="Intero Real Estate Services" 
              className="h-12 w-auto"
            />{/* Increased logo from h-10 to h-12 */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" onClick={handleHomeClick} className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="/#ai-tools" className="text-gray-700 hover:text-gray-900">
              AI Tools
            </a>
            <Link to="/second-opinion" className="text-gray-700 hover:text-gray-900">
              Second Opinion
            </Link>
            <a href="/#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/#seller-qa" className="text-gray-700 hover:text-gray-900">
              Seller Q&A
            </a>
            <a href="/#blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </a>
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <a 
              href="/#contact" 
              onClick={handleGetStartedClick}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={handleHomeClick} className="text-gray-700 py-2">
                Home
              </Link>
              <a href="/#services" onClick={() => setIsOpen(false)} className="text-gray-700 py-2">
                Services
              </a>
              <a href="/#ai-tools" onClick={() => setIsOpen(false)} className="text-gray-700 py-2">
                AI Tools
              </a>
              <Link to="/second-opinion" onClick={() => setIsOpen(false)} className="text-gray-700 py-2">
                Second Opinion
              </Link>
              <a href="/#about" onClick={() => setIsOpen(false)} className="text-gray-700 py-2">
                About
              </a>
              <a href="/#seller-qa" onClick={() => setIsOpen(false)} className="text-gray-700 py-2">
                Seller Q&A
              </a>
              <a href="/#blog" onClick={() => setIsOpen(false)} className="text-gray-700 py-2">
                Blog
              </a>
              <a 
                href="/#contact" 
                onClick={handleGetStartedClick}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-center font-medium mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}