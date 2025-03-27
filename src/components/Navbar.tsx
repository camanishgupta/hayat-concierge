
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        {
          "bg-white/70 backdrop-blur-md shadow-sm": isScrolled || isMobileMenuOpen,
          "bg-transparent": !isScrolled && !isMobileMenuOpen,
        }
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold text-navy">Bespoke Thai</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("nav-link", { "after:scale-x-100 text-foreground": isActive("/") })}>
            Home
          </Link>
          <Link to="/blog" className={cn("nav-link", { "after:scale-x-100 text-foreground": isActive("/blog") })}>
            Itineraries
          </Link>
          <Link to="/facilities" className={cn("nav-link", { "after:scale-x-100 text-foreground": isActive("/facilities") })}>
            Partners
          </Link>
          <Link to="/contact" className={cn("nav-link", { "after:scale-x-100 text-foreground": isActive("/contact") })}>
            Contact
          </Link>
          <a href="tel:+6623456789" className="button-primary flex items-center gap-1 text-sm">
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </nav>

        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white/90 backdrop-blur-md border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className={cn("py-2 font-medium", { "text-gold": isActive("/") })}>
              Home
            </Link>
            <Link to="/blog" className={cn("py-2 font-medium", { "text-gold": isActive("/blog") })}>
              Itineraries
            </Link>
            <Link to="/facilities" className={cn("py-2 font-medium", { "text-gold": isActive("/facilities") })}>
              Partners
            </Link>
            <Link to="/contact" className={cn("py-2 font-medium", { "text-gold": isActive("/contact") })}>
              Contact
            </Link>
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
