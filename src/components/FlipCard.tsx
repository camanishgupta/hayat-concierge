
import React from 'react';
import { Card } from '@/components/ui/card';

interface FlipCardProps {
  title: string;
  icon: React.ReactNode;
  frontImage: string;
  frontAlt: string;
  backContent: React.ReactNode;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  title,
  icon,
  frontImage,
  frontAlt,
  backContent,
}) => {
  return (
    <div className="w-full h-[400px]">
      <Card className="w-full h-full overflow-hidden border-gold/30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <img 
              src={frontImage} 
              alt={frontAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/90 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              {icon}
              <h3 className="text-xl font-semibold text-gold">{title}</h3>
            </div>
            <div className="text-white/90 mt-4">
              {backContent}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
