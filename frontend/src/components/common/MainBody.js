import React,{useEffect, useState} from 'react'
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
import MobMaintitlebox from '../mobile/MobMainTitleBox'
import { useCookies } from 'react-cookie'

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


    const [cntrval,setCntr]=useState(0)
    const [cookies, setCookie] = useCookies(['countcookie'])
    const [showErr,setShowerr]=useState(false)
    useEffect(()=>{
        async function getdata(){
          const apiurl=`${process.env.REACT_APP_API_HOST}/getcurrentcount`
          try{
            const resp=await fetch(apiurl,{
                method:'GET',
                headers:{
                  'Content-Type':'application/json'
                }
              })
              if(resp.status!==200){
                  throw Error('error')
              }
              const respjson=await resp.json()
              setCntr(respjson.countval)
          }catch(e){
            setShowerr(true)
          }
        }
    
        async function updatedata(){
          const apiurl=`${process.env.REACT_APP_API_HOST}/updatecount`
          try{
            const apidata={action:'update'}
            const resp=await fetch(apiurl,{
            method:'POST',
            body:JSON.stringify(apidata),
            headers:{
              'Content-Type':'application/json'
            }
          })
          if(resp.status!==200){
            throw Error('error')
          }
          const respjson=await resp.json()
          setCookie('countcookie', 'yes', { path: '/' });
          setCntr(respjson.newcount)
          }catch(e){
            setShowerr(true)
          }
        }
        getdata()
        if(!cookies.countcookie){
          updatedata()
        }   
    
      },[])

    return <>
    <div className='mobmainContainer'>        
        {mobshowMainBox && <MobMainbox visCount= {cntrval} errShow={showErr} setmobMainshow={setmobMainBox} setmobabout={setmobShowabt} setmobskills={setmobShowskill} setMobShowExp={setmobShowexp} setMobShowPort={setmobShowport} />}
        {mobshowAbout && <MobAboutPage setmobMainshow={setmobMainBox} setmobabout={setmobShowabt} />}
        {mobshowSkills && <MobSkillspage setmobMainshow={setmobMainBox} setmobskills={setmobShowskill} />}
        {mobshowExp && <MobExpPage setmobMainshow={setmobMainBox} setMobShowExp={setmobShowexp} />}
        {mobshowPort && <MobPortfolioPage setmobMainshow={setmobMainBox} setMobShowPort={setmobShowport} />}
    </div>
    <div className='mainContainer'>
        {showMainBox && <MainTitlebox visCount= {cntrval} errShow={showErr} />}
        {showMainBox && <MidMainbox setMainshow={setMainBox} setabout={setShowabt} setskill={setShowskill} setShowExp={setShowexp} setShowPort={setShowport} />}
        {showAbout && <AboutMepage setMainshow={setMainBox} setabout={setShowabt} />}
        {showSkills && <SkillsPage setMainshow={setMainBox} setskill={setShowskill} />}
        {showExp && <ExpPage setMainshow={setMainBox} setexp={setShowexp} />}
        {showPort && <Portfoliopage setMainshow={setMainBox} setexp={setShowport} />}
    </div></>
}

export default MainBody