import React from 'react';
import PrimaryButton from './PrimaryButton';

import { CgFileDocument} from 'react-icons/cg';

const InfoSection = ({question, paragraph, image, textFirst, buttonLink, buttonText}) => {
    return <div id='About'>
        {textFirst === true? 
        <section className = "py-24 lg:py-0 lg:h-90vh lg:flex items-center justify-center text-white">
            <div className = "w-9/12 lg:w-4/12 lg:hidden mx-auto">
                <div className = " bg-suffolk-blue mx-auto ">
                    <img className = "h-64 w-80 lg:h-96 lg:w-96 mx-auto" src={image} alt=""/>
                </div>
            </div>
            <div className = "w-12/12 md:w-9/12 lg:w-5/12 flex-col flex font-RadioGrotesk mx-auto lg:mx-0">
                <h1 className = "text-5xl lg:text-6xl mb-4 text-suffolk-gold font-KawinganBold text-center mx-auto">{question}</h1>
                <p className = "text-base lg:text-lg 2xl:text-2xl w-11/12 font-RadioGrotesk mx-auto"> {paragraph}</p>
                <div className='mt-3 mx-auto'>
                    <PrimaryButton link={buttonLink} text={buttonText} icon={<CgFileDocument className='text-xl'/>}/>            
                </div>                
            </div>
            <div className = "w-4/12 hidden lg:block">
                <div className = " bg-suffolk-blue  mx-auto ">
                    <img className = "h-96 w-96 mx-auto" src={image} alt=""/>
                </div>
            </div>

        </section> :
        
        <section className = "py-24 lg:py-0 lg:h-90vh lg:flex items-center justify-center text-white">
            <div className = "w-9/12 lg:w-4/12 mx-auto">
                <div className = " bg-suffolk-blue mx-auto ">
                    <img className = "h-64 w-80 lg:h-96 lg:w-96 mx-auto" src={image} alt=""/>
                </div>
            </div>
            <div className = "w-12/12 md:w-9/12 lg:w-5/12 flex-col flex font-RadioGrotesk mx-auto lg:mx-0">
                <h1 className = "text-5xl lg:text-6xl mb-4 text-suffolk-gold font-KawinganBold text-center mx-auto">{question}</h1>
                <p className = "text-base lg:text-lg 2xl:text-2xl w-11/12 font-RadioGrotesk mx-auto"> {paragraph}</p>
                <div className='mt-3 mx-auto'>
                    <PrimaryButton link={buttonLink} text={buttonText} icon={<CgFileDocument className='text-xl'/>}/>            
                </div>                
            </div>
        </section>
        }
    </div>;
};

export default InfoSection;
