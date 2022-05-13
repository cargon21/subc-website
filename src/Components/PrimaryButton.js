import React from 'react';

const PrimaryButton = ({link, text, icon}) => {
	return <div>
        <a href={link} className='text-lg flex items-center justify-center gap-x-1 text-white rounded-full px-7 py-1.5 transition duration-700 ease-in-out bg-suffolk-gold hover:bg-white hover:text-suffolk-gold transform hover:-translate-y-1 hover:scale-110' target='_blank' rel='noopener noreferrer'>            
			{icon}
            <h1>{text}</h1>
        </a>
  	</div>;
};

export default PrimaryButton;
