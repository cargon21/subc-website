import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const DiscordButton = () => {
    return <div>
        <a href='https://discord.gg/XaJE8rexzh' className = 'mt-4 text-lg inline-flex items-center \
            justify-center gap-x-1 text-white rounded-full px-7 py-1.5 transition duration-700 ease-in-out \
            bg-suffolk-gold hover:bg-white hover:text-suffolk-gold transform hover:-translate-y-1 hover:scale-110' target='_blank' rel='noopener noreferrer' >            
            <FaDiscord className='text-xl'/>
            <h1>Discord</h1>
        </a>
    </div>;
};

export default DiscordButton;
