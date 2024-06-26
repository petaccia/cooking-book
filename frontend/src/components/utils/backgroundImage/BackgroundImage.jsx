import React from 'react';

const BackgroundImage = ({ children }) => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836';

  return (
    <div
      className="bg-cover bg-center min-h-screen inset-0 pt-24 md:pt-32 md:pb-16"
      style={{ 
        backgroundImage: `url(${backgroundImageUrl})`,
        
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;