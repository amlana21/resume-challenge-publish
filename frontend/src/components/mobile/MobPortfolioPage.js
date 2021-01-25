import React from 'react'
import Paper from '@material-ui/core/Paper';
import PortfolioNav from './MobPortfolioCntnt'
import Portfoliotop from './MobPortfolioTopLabel'
function PortfoliPage(props){

    const handleBacknav=()=>{
        props.setmobMainshow(true)
        props.setMobShowPort(false)
      }
    return <div><Portfoliotop bodytext='Portfolio' backBtn={handleBacknav} /><Paper elevation={0} className='mobportfmain' >
    <PortfolioNav />
</Paper></div>
}

export default PortfoliPage