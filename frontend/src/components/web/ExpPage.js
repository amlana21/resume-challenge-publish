import React from 'react'
import Paper from '@material-ui/core/Paper';
import ExpNav from './ExpNav'
import ExpTopLabel from './ExpTopLabel'
// setMainshow={setMainBox} setexp={setShowexp}
function ExpPage(props){

    const handleBacknav=()=>{
        props.setMainshow(true)
        props.setexp(false)
      }

    return <div><ExpTopLabel bodytext='Experience' backBtn={handleBacknav} /><Paper elevation={0} className='webexpmain' >
    <ExpNav />

    </Paper></div>
}

export default ExpPage