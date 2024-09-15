import Card from './card';
import React from 'react'
const CardContainer: React.FC = () => {
    return (
      <div className="grid place-items-center min-h-screen p-4">
        <Card
          title="Sample Card"
          subtitle="Card Subtitle"
          description="This is a description of the card."
          imageSrc="/path/to/image.jpg"
        />
      </div>
    );
  };