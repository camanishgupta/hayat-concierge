
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';
import { useContentItem } from '@/hooks/useContentItem';

interface TestimonialCardProps {
  id: string;
  titleId: string;
  delay?: number;
}

const TestimonialCard = ({ id, titleId, delay = 0 }: TestimonialCardProps) => {
  const content = useContentItem(id);
  const title = useContentItem(titleId);
  
  return (
    <div 
      className={cn(
        "glass-card bg-emerald/40 border-gold/10 p-8 opacity-0 transform translate-y-8 transition-all duration-700",
        { "opacity-100 translate-y-0": true }
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-gold fill-gold" />
          ))}
        </div>
        <Quote size={24} className="text-gold/30" />
      </div>
      <blockquote className="mb-6 text-white/90 italic">
        "{content}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold mr-3">
          {title.split(' ')[0][0]}
        </div>
        <div>
          <p className="font-medium text-gold">{title}</p>
          <p className="text-sm text-white/60">{title.split(' - ')[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
