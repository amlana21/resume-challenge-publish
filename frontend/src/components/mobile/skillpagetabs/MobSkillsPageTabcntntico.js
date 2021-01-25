import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SkillPageIco from './MobSkillsPageSkillico'
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function IconAvatars(props) {
  const classes = useStyles();

  return (
    <div style={{margin:'auto'}}>
      <SkillPageIco skillicon={props.skillicon} /><br></br>
      {props.fullstar.map((rw)=><StarIcon />) }
      {props.halfstar.map((rw)=><StarHalfIcon />) }
      {props.emptystar.map((rw)=><StarBorderIcon />) }
      <br></br>
      <a>{props.skillname}</a>      
    </div>
    
  );
}
