import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';
import { useContentItem } from '@/hooks/useContentItem';

interface TestimonialCardProps {
  id: string;
  delay?: number;
}

const TestimonialCard = ({ id, delay = 0 }: TestimonialCardProps) => {
  const content = useContentItem(id);

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
      <blockquote className="text-white/90 italic">
        "{content}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
