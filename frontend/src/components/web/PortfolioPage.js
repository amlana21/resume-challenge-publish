import React from 'react'
import Paper from '@material-ui/core/Paper';
import PortfolioNav from './PortfolioCntnt'
import Portfoliotop from './PortfolioTopLabel'
// setMainshow={setMainBox} setexp={setShowexp}
function PortfoliPage(props){

    const handleBacknav=()=>{
        props.setMainshow(true)
        props.setexp(false)
      }
    return <div><Portfoliotop bodytext='Portfolio' backBtn={handleBacknav} /><Paper elevation={0} className='webportfmain' >
    <PortfolioNav />
</Paper></div>
}

export default PortfoliPage