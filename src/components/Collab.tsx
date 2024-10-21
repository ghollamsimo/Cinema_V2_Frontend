import React from "react";
import ScrollCarousel from 'scroll-carousel-react';
import { Collaboration as Sponsor } from '../constant.ts';

const Collab: React.FC = () => {
    return (
        <>
            <ScrollCarousel
                autoplay={true}
                autoplaySpeed={8}
                speed={7}
            >
                <div className='flex m-12 gap-7 justify-center items-baseline'>
                    {Sponsor.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} className="w-72 h-fit mx-2" />
                    ))}
                </div>
            </ScrollCarousel>
        </>
    );
}

export default Collab;