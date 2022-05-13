import React from 'react'

const VisionSection = ({videoLink}) => {
  return (
    <div>
        <div className='font-RadioGrotesk text-center text-white lg:h-screen flex flex-col items-center justify-center'>
            <h2 className='text-5xl py-12 font-KawinganBold text-suffolk-gold'>Vision</h2>
            <iframe className='mx-auto w-vid-w-1 h-vid-h-1 md:w-vid-w-2 md:h-vid-h-2' src={videoLink} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default VisionSection