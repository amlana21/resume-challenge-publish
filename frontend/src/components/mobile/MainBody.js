import React,{useState} from 'react'
import MidMainbox from '../web/MdMainBox'
import MainTitlebox from '../web/MainTitleBox'
import AboutMepage from '../web/AboutMePage'
import SkillsPage from '../web/SkillsPage'
import ExpPage from '../web/ExpPage'
import Portfoliopage from '../web/PortfolioPage'
import MobMainbox from '../mobile/MobMainbox'
import MobAboutPage from '../mobile/MobAboutmepage'
import MobSkillspage from '../mobile/MobSkillsPage'
import MobExpPage from '../mobile/MobExpPage'
import MobPortfolioPage from '../mobile/MobPortfolioPage'

function MainBody(){

    const [showMainBox,setMainBox]=useState(true)
    const [showAbout,setShowabt]=useState(false)
    const [showSkills,setShowskill]=useState(false)
    const [showExp,setShowexp]=useState(false)
    const [showPort,setShowport]=useState(false)

    const [mobshowMainBox,setmobMainBox]=useState(true)
    const [mobshowAbout,setmobShowabt]=useState(false)
    const [mobshowSkills,setmobShowskill]=useState(false)
    const [mobshowExp,setmobShowexp]=useState(false)
    const [mobshowPort,setmobShowport]=useState(false)

    return <>
    <div className='mobmainContainer'>
        {true && <MainTitlebox />}
        {mobshowMainBox && <MobMainbox setmobMainshow={setmobMainBox} setmobabout={setmobShowabt} setmobskills={setmobShowskill} setMobShowExp={setmobShowexp} setMobShowPort={setmobShowport} />}
        {mobshowAbout && <MobAboutPage setmobMainshow={setmobMainBox} setmobabout={setmobShowabt} />}
        {mobshowSkills && <MobSkillspage setmobMainshow={setmobMainBox} setmobskills={setmobShowskill} />}
        {mobshowExp && <MobExpPage setmobMainshow={setmobMainBox} setMobShowExp={setmobShowexp} />}
        {mobshowPort && <MobPortfolioPage setmobMainshow={setmobMainBox} setMobShowPort={setmobShowport} />}
    </div>
    <div className='mainContainer'>
        {true && <MainTitlebox />}
        {showMainBox && <MidMainbox setMainshow={setMainBox} setabout={setShowabt} setskill={setShowskill} setShowExp={setShowexp} setShowPort={setShowport} />}
        {showAbout && <AboutMepage setMainshow={setMainBox} setabout={setShowabt} />}
        {showSkills && <SkillsPage setMainshow={setMainBox} setskill={setShowskill} />}
        {showExp && <ExpPage setMainshow={setMainBox} setexp={setShowexp} />}
        {showPort && <Portfoliopage setMainshow={setMainBox} setexp={setShowport} />}
    </div></>
}

export default MainBody