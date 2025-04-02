
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'icon' | 'text';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className,
  variant = 'icon'
}) => {
  const { language, toggleLanguage } = useLanguage();
  
  if (variant === 'text') {
    return (
      <button
        onClick={toggleLanguage}
        className={cn(
          "text-teal hover:text-gold transition-colors flex items-center gap-1 font-medium",
          className
        )}
      >
        {language === 'en' ? 'العربية' : 'English'}
        <Globe className="w-4 h-4" />
      </button>
    );
  }
  
  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "language-switcher flex items-center gap-1 bg-teal/10 hover:bg-teal/20 px-2 py-1 rounded text-teal",
        className
      )}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
