import React from 'react';
import PrimaryButton from './PrimaryButton';
import SUBCLogo from './../Images/Logo/SUBCLogo.png'

import { CgFileDocument, CgCalendarDates} from 'react-icons/cg';

const NavBar = () => {
    function smoothScroll(section, pos) {
        document.querySelector(section).scrollIntoView({ block: pos, behavior: 'smooth' });
    }
    return <div className='hidden md:block'>
        <div className='w-screen bg-black text-white z-30 fixed h-10vh flex items-center md:gap-x-16 lg:gap-x-32 2xl:gap-x-48 justify-center font-KawinganBold text-lg' >
            <button className='absolute left-16 h-full'>
                <img src={SUBCLogo} alt="" className=' h-full bg-black' onClick={() => smoothScroll('#Top', 'end')}/>
            </button>
            <button className='hover:text-suffolk-gold' onClick={() => smoothScroll('#About', 'center')}>About</button>
            <button className='hover:text-suffolk-gold' onClick={() => smoothScroll('#Team', 'center')}>The Team</button>
            <a href='https://suffolk-university-blockchain-cl.gitbook.io/home/get-involved/contact-us' className='hover:text-suffolk-gold' target='_blank' rel='noopener noreferrer'>Contact</a>
            <div className='absolute md:right-4 lg:right-8 2xl:right-16 flex justify-center items-center gap-x-6'>
                <div className=''>
                    <PrimaryButton link={'https://suffolk-university-blockchain-cl.gitbook.io/home'} text={'Docs'} icon={<CgFileDocument className='text-xl'/>}/>
                </div>
                <div className=''>
                    <PrimaryButton link={'https://suffolk-university-blockchain-cl.gitbook.io/home/activities/events'} text={'Events'} icon={<CgCalendarDates className='text-xl'/>}/>
                </div>
            </div>
        </div>
    </div>;
};

export default NavBar;
