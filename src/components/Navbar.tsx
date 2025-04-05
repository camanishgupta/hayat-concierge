
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Settings, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

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

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        {
          "shadow-md": isScrolled || isMobileMenuOpen,
        }
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2" onClick={scrollToTop}>
          <img src="/logo.svg" alt="Hayat Concierge" className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={cn("nav-link text-teal", { "after:scale-x-100 text-gold": isActive("/") })}
            onClick={scrollToTop}
          >
            {t('nav.home')}
          </Link>
          
          <Link 
            to="/services" 
            className={cn("nav-link text-teal", { "after:scale-x-100 text-gold": isActive("/services") })}
            onClick={scrollToTop}
          >
            {t('nav.services')}
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link text-teal bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent">
                  {t('nav.aboutUs')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-white">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            { "bg-accent": isActive("/about-us") }
                          )}
                          onClick={scrollToTop}
                        >
                          <div className="text-sm font-medium text-teal">{t('nav.aboutHayat')}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/founder"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            { "bg-accent": isActive("/founder") }
                          )}
                          onClick={scrollToTop}
                        >
                          <div className="text-sm font-medium text-teal">{t('nav.aboutFounder')}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to="/facilities" 
            className={cn("nav-link text-teal", { "after:scale-x-100 text-gold": isActive("/facilities") })}
            onClick={scrollToTop}
          >
            {t('nav.partners')}
          </Link>
          <Link 
            to="/enquiry" 
            className={cn("nav-link text-teal", { "after:scale-x-100 text-gold": isActive("/enquiry") })}
            onClick={scrollToTop}
          >
            {t('nav.enquiry')}
          </Link>
          {showAdmin && (
            <Link 
              to="/admin" 
              className={cn("nav-link flex items-center text-teal", { "after:scale-x-100 text-gold": isActive("/admin") })}
              onClick={scrollToTop}
            >
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </Link>
          )}
          
          <LanguageSwitcher variant="text" className="mx-2" />
          
          <Link to="/enquiry" className="button-primary flex items-center gap-1 text-sm" onClick={scrollToTop}>
            <Phone className="w-4 h-4" />
            <span>{t('nav.contactUs')}</span>
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          
          <button 
            className="text-teal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white border-t border-gold/10 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn("py-2 font-medium text-teal", { "text-gold": isActive("/") })}
              onClick={scrollToTop}
            >
              {t('nav.home')}
            </Link>
            
            <Link 
              to="/services" 
              className={cn("py-2 font-medium text-teal", { "text-gold": isActive("/services") })}
              onClick={scrollToTop}
            >
              {t('nav.services')}
            </Link>
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between py-2 font-medium text-teal cursor-pointer">
                <span>{t('nav.aboutUs')}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-4 flex flex-col space-y-2">
                <Link 
                  to="/about-us" 
                  className={cn("py-2 font-medium text-teal", { "text-gold": isActive("/about-us") })}
                  onClick={scrollToTop}
                >
                  {t('nav.aboutHayat')}
                </Link>
                <Link 
                  to="/founder" 
                  className={cn("py-2 font-medium text-teal", { "text-gold": isActive("/founder") })}
                  onClick={scrollToTop}
                >
                  {t('nav.aboutFounder')}
                </Link>
              </div>
            </div>
            
            <Link 
              to="/facilities" 
              className={cn("py-2 font-medium text-teal", { "text-gold": isActive("/facilities") })}
              onClick={scrollToTop}
            >
              {t('nav.partners')}
            </Link>
            <Link 
              to="/enquiry" 
              className={cn("py-2 font-medium text-teal", { "text-gold": isActive("/enquiry") })}
              onClick={scrollToTop}
            >
              {t('nav.enquiry')}
            </Link>
            {showAdmin && (
              <Link 
                to="/admin" 
                className={cn("py-2 font-medium text-teal flex items-center", { "text-gold": isActive("/admin") })}
                onClick={scrollToTop}
              >
                <Settings className="w-4 h-4 mr-1" />
                Admin
              </Link>
            )}
            <Link 
              to="/enquiry" 
              className="button-primary flex items-center justify-center gap-1 mt-2 text-sm"
              onClick={scrollToTop}
            >
              <Phone className="w-4 h-4" />
              <span>{t('nav.contactUs')}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
