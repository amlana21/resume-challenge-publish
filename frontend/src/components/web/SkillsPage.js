import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';
import SkillNav from './SkillsPageNav'
import SkillsTopLabel from './SkillsPageToplabel'

function Skillspage(props){
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBacknav=()=>{
    props.setMainshow(true)
    props.setskill(false)
  }

    return <div><SkillsTopLabel bodytext='Skills' backBtn={handleBacknav} /><Paper elevation={0} className='webskillsmain' >
        
        <SkillNav />
    
    </Paper></div>
}

export default Skillspage