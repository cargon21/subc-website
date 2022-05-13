import BulletSection from './Components/BulletSection'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'
import IntroSection from './Components/IntroSection'
import NavBar from './Components/NavBar'
import ParagraphSection from './Components/ParagraphSection'
import Partners from './Components/Partners'
import Team from './Components/Team'
import VisionSection from './Components/VisionSection'

import { teamMembers } from './Data/teamMembers'

import {backgroundVideo, buildingBlocks, teaching, networking, creating, contribution, bbaLogo, benLogo, encodeLogo, theBlockchainAcademyLogo,} from './imports'

function App() { 
    function smoothScroll(section, pos) {
      document.querySelector(section).scrollIntoView({ block: pos, behavior: 'smooth' });
    }

    return (
        <div className='bg-suffolk-blue overflow-hidden scroll-smooth'>
            <NavBar />

            <IntroSection vid={backgroundVideo}/>

            <VisionSection videoLink={"https://www.youtube.com/embed/gYyMasbnM1I"}/>

            <ParagraphSection question={"Mission"} paragraph={"SU Blockchain aims to cultivate a community \
				that both adopts and advances blockchain application through education, teamwork, and innovation."}
				image={buildingBlocks} textFirst={true} buttonLink={'https://suffolk-university-blockchain-cl.gitbook.io/home'} buttonText={'Docs'}/>

            <BulletSection question={"Contribution"} bullets={["Educational content through multiple channels",
				"Workshops of NFT, smart contract, minting, mining, etc.",
				"Meetings with blockchain application creators and developers",
				"Career fair within the blockchain space",
				"Communication platform to provide resources and support"]}
				image={contribution} textFirst={true} buttonLink={'https://suffolk-university-blockchain-cl.gitbook.io/home/activities/events'} buttonText={'Events'}/>

            <CardSection question={"Strategy"} titles = {["Lead", "Create", "Network"]} images={[teaching, creating, networking]}
				descriptions={['We inspire and direct students to apply Blockchain knowledge by designing and building real-life applications.', 'We produce daily educational content through social media posts and videos.',
				'We invest time and effort in developing partnerships with top universities and blockchain education foundations to connect leaders with students.',
				]}/>

			<Team teamMembers= {teamMembers} />

            <Partners partners={[bbaLogo, theBlockchainAcademyLogo, encodeLogo, benLogo]}/>

            <div className='md:hidden flex justify-center pb-2'>
                <button className='text-suffolk-gold' onClick={() => smoothScroll('#Top', 'center')}>Back to Top</button>
            </div>
            
            <Footer/>    
        </div>
    );
}

export default App;
