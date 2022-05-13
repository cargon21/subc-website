import React from 'react'

const Partners = ({partners}) => {
  return (
    <div>
        <div className='font-RadioGrotesk text-center text-white h-screen flex flex-col items-center justify-center' id='Partners'>
            <h2 className='text-5xl lg:text-6xl py-12 font-KawinganBold text-suffolk-gold '>Our Partners</h2>
            <div className='flex flex-wrap gap-4 justify-center w-11/12 mx-auto'>
                {partners.map((partner, index) => {
                    return <img key={index} src={partner} alt="" className='h-28 w-auto bg-white'/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Partners
