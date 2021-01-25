import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MobMaintitlebox from '../mobile/MobMainTitleBox'

import aboutmeicon from '../../images/aboutmeicon.svg';
import skills from '../../images/cert.svg';
import exp from '../../images/exp.svg';
import port from '../../images/port.svg';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top:'100px',
    position:'relative',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  function setDisplays(){
    props.setmobMainshow(false)
    props.setmobabout(true)
  }

  function setDisplaySkill(){
    props.setmobMainshow(false)
    props.setmobskills(true)
  }

  function setDisplayExp(){
    props.setmobMainshow(false)
    props.setMobShowExp(true)
  }

  function setDisplayPort(){
    props.setmobMainshow(false)
    props.setMobShowPort(true)
  }

  return (
    <div>
      {/* <div style={{width:'100',backgroundColor:'blue',height:'10'}}>

      </div> */}
      <MobMaintitlebox visCnt={props.visCount} errShow={props.errShow} />
      {/* {true && <MobMaintitlebox />} */}
      <div className={classes.root} >
     {/* <div className='mobmidbox'> */}
     
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img onClick={setDisplays} className='mobmainabouticon'
          src={aboutmeicon}
        />
        <Typography component="h2" variant="h3" gutterBottom className='mobmidboxlabels1'>
        About Me
      </Typography>
      
        </Grid>
        <Grid item xs={6}>
          <img onClick={setDisplaySkill} className='mobmainabouticon'
          src={skills}
        />
        <Typography component="h2" variant="h3" gutterBottom className='mobmidboxlabels2'>
          Skills
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <img onClick={setDisplayExp} className='mobmainabouticon'
          src={exp}
        />
        <Typography component="h2" variant="h3" gutterBottom className='mobmidboxlabels3'>
          Experience
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <img onClick={setDisplayPort} className='mobmainabouticon'
          src={port}
        />
        <Typography component="h2" variant="h3" gutterBottom className='mobmidboxlabels4'>
          Portfolio
        </Typography>
        </Grid>
      </Grid>
    </div>
    </div>
    
  );
}
