import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <ImageWithFallback
                src="https://framerusercontent.com/images/lmqHUDA6OlMMqYvyUq5QoqlIwLA.png"
                alt="Webbheads Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl">Webbheads</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('work')} className="hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">
              Team
            </button>
            <Button onClick={() => scrollToSection('contact')}>
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Team
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Let's Talk
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
