import React from 'react'
import Paper from '@material-ui/core/Paper';
import ExpNav from './MobExpNav'
import ExpTopLabel from './MobExpTopLabel'
import MobExptab from './MobExpTabbed'
function ExpPage(props){

    const handleBacknav=()=>{
        props.setmobMainshow(true)
        props.setMobShowExp(false)
      }

    return <div><ExpTopLabel bodytext='Experience' backBtn={handleBacknav} /><Paper elevation={0} className='mobexpmain' >
    
    <MobExptab />
    </Paper></div>
}

export default ExpPage