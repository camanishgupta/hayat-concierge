
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
    <div className="flip-card w-full h-[400px] perspective">
      <div className="flip-card-inner relative w-full h-full transition-all duration-700 transform-style-3d">
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full backface-hidden">
          <Card className="w-full h-full overflow-hidden border-gold/30">
            <div className="absolute inset-0">
              <img 
                src={frontImage} 
                alt={frontAlt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/90 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                {icon}
                <h3 className="text-xl font-semibold text-gold">{title}</h3>
              </div>
              <p className="text-white/90 text-sm">Flip to learn more</p>
            </div>
          </Card>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full backface-hidden transform rotate-y-180">
          <Card className="w-full h-full overflow-auto p-6 border-gold/30 bg-white/95">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gold/20">
              {icon}
              <h3 className="text-xl font-semibold text-teal">{title}</h3>
            </div>
            <div className="text-charcoal/80">
              {backContent}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
