
import React, { useState, useEffect } from 'react';

interface CMSImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

// This component handles images that might come from our CMS system
const CMSImage: React.FC<CMSImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = "https://via.placeholder.com/800x600?text=Image+Not+Found"
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Reset state when src changes
    setImageSrc(src);
    setError(false);
  }, [src]);

  useEffect(() => {
    // Check if this is a CMS-managed image path
    if (src.startsWith('/images/cms/')) {
      const filename = src.split('/').pop();
      if (filename) {
        // Try to get image from localStorage
        const storedImage = localStorage.getItem(`cms_image_${filename}`);
        
        if (storedImage) {
          setImageSrc(storedImage);
        }
      }
    }
  }, [src]);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImageSrc(fallbackSrc);
    }
  };

  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

export default CMSImage;
