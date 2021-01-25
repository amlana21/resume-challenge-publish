import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MainTitleGrid from './MobMainTitleSkillgrid'
import MainTitleIcon from './MobMainTitleIcons'
import Chip from '@material-ui/core/Chip';
import MobMaintitlelvl1icons from './MobMaintitleIconslv1'
import MobMaintitlescroll from './MobMainTitleSkillsscroll'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { useCookies } from 'react-cookie'
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    position:"relative",
    top:'6%',
    left: '32%'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    left: '200px'
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
      <div className='mobmaintitlediv' >
          <Typography variant="h4" component="h2" className='mobmaintitlename' >Amlan Chakladar{!props.errShow && <Badge badgeContent={props.visCnt} max={10000000} color="primary" style={{position:'absolute',right:'35%',top:'12px'}}>
          <PeopleAltIcon fontSize="medium" />
          </Badge>}
          {props.errShow && <Badge color="primary" style={{position:'absolute',right:'35%',top:'12px'}}>
          <ErrorIcon fontSize="medium" />
        </Badge>}
          </Typography>
          <MobMaintitlelvl1icons />
          <MainTitleIcon />
          
          <MobMaintitlescroll />
          
      </div>
  );
}