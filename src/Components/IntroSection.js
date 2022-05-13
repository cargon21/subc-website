import React from 'react'
import DiscordButton from './DiscordButton'

const IntroSection = ({vid}) => {
  return (
    <div>
        <header className="bg-Image1 lg:bg-none lg:bg-black bg-center bg-cover text-white relative flex items-center justify-center h-screen md:h-90vh overflow-hidden md:mt-10vh font-KawinganBold" id='Top'>
            <div className='text-center z-20'>
                <h1 className='w-5/6 text-5xl lg:text-7xl mx-auto'> Suffolk University Blockchain Club </h1>
                <h2 className='mx-auto w-5/6 lg:w-full text-3xl lg:text-3xl pt-4'> Building the Community, Exploring the Future </h2>
                <DiscordButton />
            </div>
            
            <video autoPlay loop muted className="hidden lg:block absolute w-auto opacity-80">
                <source src ={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </header>
    </div>
  )
}

export default IntroSection