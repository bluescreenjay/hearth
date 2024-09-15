import React from 'react';


interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link:
}

const Card: React.FC<CardProps> = ({title, subtitle, description, image,link}) =>
{
    return(
        <div className="">
            <img src={image} alt={'Card avatar'} className="" />
            <div className="p-4">
                <h2 className="">{title}</h2>
                <h2 className=''>{subtitle}</>
                <p className="">{description}</p>
                </div>
                </div>
    )
}

export default Card;


