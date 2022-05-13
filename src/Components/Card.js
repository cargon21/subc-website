import React from 'react';

const Card = ({heading, img, descript}) => {
  return <div>
      <div className='bg-white rounded-lg h-96 w-72 mx-3 mt-12 flex items-center justify-center flex-col font-RadioGrotesk text-black transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110'>
            <div className='w-10/12 h-1/2 mx-auto flex justify-center align-middle'>
              <img src={img} alt="card" />
            </div>
            <h1 className='w-10/12 text-lg font-KawinganBold text-center pt-4 text-suffolk-gold'>{heading}</h1>
            <p className='w-10/12 text-sm text-gray-700'>
                {descript}
            </p>
      </div>
  </div>;
};

export default Card;
