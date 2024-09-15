import React from 'react';
import Image from 'next/image';
import {StaticImageData} from 'next/image';


interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string | StaticImageData; 
}

const Card: React.FC<CardProps> = ({title, subtitle, description, imageSrc}) =>
{

    const imageSource = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
    return(
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 max-w-[600px] p-4 mb-8">
            <img src={imageSource} alt={'Card avatar'} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="">{title}</h3>
                <h4 className=''>{subtitle}</h4>
                <p className="">{description}</p>
                </div>
                </div>
    )
}

export default Card;


