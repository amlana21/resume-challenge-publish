import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import mobilechipsback from '../../images/mobilechipsback.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallOutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip
        variant="outlined"
        size="small"
        label="Oracle CX Cloud Architect"
        icon={<CloudCircleIcon />}
        style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'15px',backgroundColor:'#bbbfca',backgroundImage:`url("${mobilechipsback}")`}}
        
      />
      
      <Chip
        variant="outlined"
        size="small"
        label="AWS Certif Architect & Dev"
        icon={<CloudCircleIcon />}
        style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'15px',backgroundColor:'#bbbfca',backgroundImage:`url("${mobilechipsback}")`}}
        
      />
      <Chip
        variant="outlined"
        size="small"
        label="DevOps Architect"
        icon={<CloudCircleIcon />}
        style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'15px',backgroundColor:'#bbbfca',backgroundImage:`url("${mobilechipsback}")`}}
        
      />
      <Chip
        variant="outlined"
        size="small"
        label="HarvardX Cert Python/JScript Dev"
        icon={<CloudCircleIcon />}
        style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'15px',backgroundColor:'#bbbfca',backgroundImage:`url("${mobilechipsback}")`}}
        // onClick={handleClick}
      />
      <Chip
        variant="outlined"
        size="small"
        label="Azure/Microsoft Certified"
        icon={<CloudCircleIcon />}
        style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'15px',backgroundColor:'#bbbfca',backgroundImage:`url("${mobilechipsback}")`}}
        // onClick={handleClick}
      />
      
    </div>
  );
}
