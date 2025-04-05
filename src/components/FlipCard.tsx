
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
    <div className="w-full h-auto">
      <Card className="w-full overflow-hidden border-gold/30">
        <div className="relative w-full">
          <div>
            <img 
              src={frontImage} 
              alt={frontAlt}
              className="w-full h-[200px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/90 to-transparent"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-2">
              {icon}
              <h3 className="text-xl font-semibold text-gold">{title}</h3>
            </div>
            <div className="text-black mt-4">
              {backContent}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
