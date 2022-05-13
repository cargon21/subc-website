import React from 'react'
import Avatar from './Avatar'

const Team = ({teamMembers}) => {
  return (
    <div>
        <div className='font-RadioGrotesk text-center text-white lg:h-screen flex flex-col items-center justify-center' id='Team'>
            <h2 className='text-5xl py-12 font-KawinganBold text-suffolk-gold'>Meet The Team</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 justify-items-center 2xl:w-1/2 mx-auto'>
                {teamMembers.map((member, index) => {
                    return <Avatar key={index} name={member.name} position={member.position} img={member.img} linkedin={member.linkedin}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Team
