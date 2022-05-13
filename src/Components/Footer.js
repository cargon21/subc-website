import React from 'react';
import SUBCLogo from './../Images/Logo/SUBCLogo.png'

import { FaTiktok, FaDiscord, FaInstagram, FaLinkedin, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return <div>
        <div className='py-8 bg-gray-800 flex flex-col md:flex-row justify-center items-center gap-x-24 text-white text-center font-RadioGrotesk'>
            <div className='flex flex-col'>
                <img src={SUBCLogo} alt='SUBC Logo' className='w-32 h-auto mx-auto'/>
                <p className='text-xl pt-1'>@2022 Suffolk University Blockchain Club</p>
                <p className=''>All Rights Reserved</p>
            </div>

            <div className='flex flex-col pt-12 md:pt-0'>
                <h1>Check us out on</h1>
                <div className='pt-2 grid grid-cols-4 gap-2 lg:gap-1'>
                    <a href='https://discord.gg/XaJE8rexzh' target='_blank' rel='noopener noreferrer'>
                        <FaDiscord className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                    <a href='https://www.tiktok.com/@sublockchain' target='_blank' rel='noopener noreferrer'>
                        <FaTiktok className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                    <a href='https://www.instagram.com/sublockchain/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                    <a href='https://www.linkedin.com/company/su-blockchain' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                    <a href=' https://www.facebook.com/sublockchain/' target='_blank' rel='noopener noreferrer'>
                        <FaFacebookF className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                    <a href='https://www.youtube.com/channel/UCVvDVA35-MvPVjOlWclmhPg' target='_blank' rel='noopener noreferrer'>
                        <FaYoutube className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                    <a href='https://twitter.com/SU_Blockchain' target='_blank' rel='noopener noreferrer'>
                      <FaTwitter className='w-10 h-auto px-1 hover:text-suffolk-gold'/>
                    </a>
                </div>
            </div>
        </div>

      </div>;
};

export default Footer;
