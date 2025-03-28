
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Secret admin button - press "a" key 3 times
  useEffect(() => {
    let keyPresses: string[] = [];
    let timer: NodeJS.Timeout;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'a' || e.key === 'A') {
        keyPresses.push(e.key);
        
        clearTimeout(timer);
        timer = setTimeout(() => {
          keyPresses = [];
        }, 1000);

        if (keyPresses.length === 3) {
          setShowAdmin(true);
          keyPresses = [];
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearTimeout(timer);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 geometric-pattern-bg",
        {
          "bg-teal/95 backdrop-blur-md shadow-md": isScrolled || isMobileMenuOpen,
          "bg-teal/80": !isScrolled && !isMobileMenuOpen,
        }
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Hayat Concierge" className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("nav-link", { "after:scale-x-100 text-gold": isActive("/") })}>
            Home
          </Link>
          <Link to="/founder" className={cn("nav-link", { "after:scale-x-100 text-gold": isActive("/founder") })}>
            Founder
          </Link>
          <Link to="/blog" className={cn("nav-link", { "after:scale-x-100 text-gold": isActive("/blog") })}>
            Itineraries
          </Link>
          <Link to="/facilities" className={cn("nav-link", { "after:scale-x-100 text-gold": isActive("/facilities") })}>
            Partners
          </Link>
          <Link to="/contact" className={cn("nav-link", { "after:scale-x-100 text-gold": isActive("/contact") })}>
            Contact
          </Link>
          {showAdmin && (
            <Link to="/admin" className={cn("nav-link flex items-center", { "after:scale-x-100 text-gold": isActive("/admin") })}>
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </Link>
          )}
          <a href="tel:+6623456789" className="button-primary flex items-center gap-1 text-sm">
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </nav>

        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-teal/95 backdrop-blur-md border-t border-gold/10 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className={cn("py-2 font-medium text-offwhite", { "text-gold": isActive("/") })}>
              Home
            </Link>
            <Link to="/founder" className={cn("py-2 font-medium text-offwhite", { "text-gold": isActive("/founder") })}>
              Founder
            </Link>
            <Link to="/blog" className={cn("py-2 font-medium text-offwhite", { "text-gold": isActive("/blog") })}>
              Itineraries
            </Link>
            <Link to="/facilities" className={cn("py-2 font-medium text-offwhite", { "text-gold": isActive("/facilities") })}>
              Partners
            </Link>
            <Link to="/contact" className={cn("py-2 font-medium text-offwhite", { "text-gold": isActive("/contact") })}>
              Contact
            </Link>
            {showAdmin && (
              <Link to="/admin" className={cn("py-2 font-medium text-offwhite flex items-center", { "text-gold": isActive("/admin") })}>
                <Settings className="w-4 h-4 mr-1" />
                Admin
              </Link>
            )}
            <a href="tel:+6623456789" className="button-primary flex items-center justify-center gap-1 mt-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
