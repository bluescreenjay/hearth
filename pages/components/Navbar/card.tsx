import React, { useState } from 'react';
import { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string | StaticImageData; 
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, imageSrc }) => {
  const [isBooked, setIsBooked] = useState(false);

  const toggleBooking = () => {
    setIsBooked(!isBooked);
  };

  const imageSource = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 mmax-w-[600px] p-4 mb-8">
      <img src={imageSource} alt={'Card avatar'} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h4 className='text-lg text-gray-600'>{subtitle}</h4>
        <p className="text-gray-800">{description}</p>
        <button
          onClick={toggleBooking}
          className={`mt-4 py-2 px-4 rounded ${isBooked ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'} transition-colors`}
        >
          {isBooked ? 'Booked' : 'Book'}
        </button>
      </div>
    </div>
  );
}

export default Card;
