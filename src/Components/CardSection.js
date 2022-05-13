import React from 'react';
import Card from './Card'

const CardSection = ({question, titles, images, descriptions}) => {
	return <div>
		<section className = "py-36 lg:py-0 lg:h-90vh flex items-center justify-center flex-col  text-white ">

        <h1 className = "text-5xl lg:text-6xl text-left mb-4 text-suffolk-gold font-KawinganBold">{question}</h1>
        
        <div className='lg:flex items-center'>
            <Card heading={titles[0]} img={images[0]} descript = {descriptions[0]}/>
            <Card heading={titles[1]} img={images[1]} descript = {descriptions[1]}/>
            <Card heading={titles[2]} img={images[2]} descript = {descriptions[2]}/>
        </div>
      </section>
  	</div>;
};

export default CardSection;
