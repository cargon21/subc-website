import React from 'react';
import PrimaryButton from './PrimaryButton';

import {CgCalendarDates} from 'react-icons/cg';

const BulletSection = ({question, bullets, image, textFirst, buttonLink, buttonText}) => {
    return <div>
        {textFirst === true? 
        <section className = 'py-24 lg:py-0 lg:h-90vh lg:flex items-center justify-center text-white'>            
            <div className = 'w-9/12 lg:w-4/12 mx-auto lg:mx-0 lg:hidden'>
                <div className = ' bg-suffolk-blue  '>
                    <img className = 'h-64 w-80 lg:h-96 lg:w-96 mx-auto' src={image} alt=''/>
                </div>
            </div>

            <div className = 'w-10/12 md:w-auto flex flex-col font-RadioGrotesk lg:pl-12 mx-auto lg:mx-0'>
                <h1 className = 'text-5xl lg:text-6xl mb-4 text-suffolk-gold font-KawinganBold text-center'>{question}</h1>
                <ul className = 'text-base lg:text-lg 2xl:text-2xl font-GoshaSans list-disc list-outside lg:mr-2 mx-auto lg:mx-0'>
                    {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
                <div className='mt-3 mx-auto'>
                    <PrimaryButton link={buttonLink} text={buttonText} icon={<CgCalendarDates className='text-xl'/>}/>         
                </div>
            </div>

            <div className = 'w-9/12 lg:w-4/12 mx-auto lg:mx-0 hidden lg:block'>
                <div className = 'bg-suffolk-blue'>
                    <img className = 'h-64 w-80 lg:h-96 lg:w-96 mx-auto' src={image} alt=''/>
                </div>
            </div>
        </section> :

        <section className = 'py-24 lg:py-0 lg:h-90vh lg:flex items-center justify-center text-white'>
            <div className = 'w-9/12 lg:w-4/12 mx-auto lg:mx-0'>
                <div className = ' bg-suffolk-blue'>
                    <img className = 'h-64 w-80 lg:h-96 lg:w-96 mx-auto' src={image} alt=''/>
                </div>
            </div>
            
            <div className = 'w-10/12 md:w-auto flex flex-col font-RadioGrotesk lg:pl-12 mx-auto lg:mx-0'>
                <h1 className = 'text-5xl lg:text-6xl mb-4 text-suffolk-gold font-KawinganBold text-center'>{question}</h1>
                <ul className = 'text-base lg:text-lg 2xl:text-2xl font-GoshaSans list-disc list-outside lg:mr-2 mx-auto lg:mx-0'>
                    {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
                <div className='mt-3 mx-auto'>
                    <PrimaryButton link={buttonLink} text={buttonText} icon={<CgCalendarDates className='text-xl'/>}/>           
                </div>
            </div>
        </section>       
        }   
    </div>;
};

export default BulletSection;
