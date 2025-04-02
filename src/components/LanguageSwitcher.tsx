
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

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
      </button>
    );
  }
  
  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "language-switcher",
        className
      )}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span>{language === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
