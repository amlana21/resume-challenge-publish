import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MainTitleGrid from '../web/MainTitleSkillgrid'
import MainTitleIcon from '../web/MainTitleIcons'
import MaintitleScroll from '../web/WebTitleSkillscroll'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
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
      <div className='maintitlediv' >
          <Typography variant="h2" component="h2" className='webmaintitlename' >Amlan Chakladar{!props.errShow && <Badge badgeContent={props.visCount} max={10000000} color="primary" style={{position:'absolute',right:'42%',top:'20px'}}>
        <SupervisorAccountIcon fontSize="large" />
      </Badge>} {props.errShow && <Badge color="primary" style={{position:'absolute',right:'42%',top:'20px'}}>
        <ErrorIcon fontSize="large" />
      </Badge>}</Typography>
          <Typography variant="h5" component="h2" className='webmaintitlename2' >Oracle CX Cloud Architect | AWS Certified Architect & Developer | Cloud DevOps Architect | HarvardX Certified Python/JavaScript Developer | Azure/Microsoft Certified</Typography>
          <MainTitleIcon />
          <MaintitleScroll />
      </div>
  );
}