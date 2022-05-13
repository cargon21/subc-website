import React from 'react';

const Avatar = ({name, img, linkedin, position}) => {
  return <div>
      <div className='flex flex-col hover:underline hover:decoration-solid decoration-suffolk-gold decoration-2'>
            <a href={linkedin} target='_blank' rel='noopener noreferrer' className=''>
                <img src={img} alt="" className='h-36 w-36 mx-auto bg-white'/>
                <h1 className='pt-1 text-lg text-suffolk-gold'>{name}</h1>
                <h1 className='pt-1'>{position}</h1>
            </a>
      </div>
  </div>;
};

export default Avatar;
