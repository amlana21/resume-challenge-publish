import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Maingriditem from './MainGridItems'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import aboutmeicon from '../../images/aboutmeicon.svg';
import skills from '../../images/cert.svg';
import exp from '../../images/exp.svg';
import port from '../../images/port.svg';

const useStyles = makeStyles((theme) => ({
    midbox: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:100
    },
  }));
  


function MidMainbox(props){
    const classes = useStyles()

    function setDisplays(){
      props.setMainshow(false)
      props.setabout(true)
    }

    function setDisplaySkill(){
      props.setMainshow(false)
      props.setskill(true)
    }

    function setDisplayExp(){
      props.setMainshow(false)
      props.setShowExp(true)
    }

    function setDisplayPort(){
      props.setMainshow(false)
      props.setShowPort(true)
    }

    



    return     <Grid container xs={6} spacing={9} className='midbox'>
        {/* <Grid item xs={6}  style={{backgroundColor:'yellow'}}> */}
        <Grid item xs={6}  > 
          <img onClick={setDisplays} className='webmainabouticon'
          src={aboutmeicon}
        />
      <Typography component="h2" variant="h3" gutterBottom className='midboxlabels1'>
        About Me
      </Typography>
        </Grid>
        <Grid  item xs={6}   >
          <img onClick={setDisplaySkill} className='webmainabouticon'
          src={skills}
        />
        <Typography component="h2" variant="h3" gutterBottom className='midboxlabels2'>
          Skills
        </Typography>
        </Grid>
        <Grid item xs={6}   >
          <img onClick={setDisplayExp} className='webmainabouticon'
          src={exp}
        />
        <Typography component="h2" variant="h3" gutterBottom className='midboxlabels3'>
          Experience
        </Typography>
        </Grid>
        <Grid item xs={6}   >
          <img onClick={setDisplayPort} className='webmainabouticon'
          src={port}
        />
        <Typography component="h2" variant="h3" gutterBottom className='midboxlabels4'>
          Portfolio
        </Typography>
        </Grid>
    </Grid>
}

export default MidMainbox