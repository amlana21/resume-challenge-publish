import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import SkillPageIcons from './MobSkillsPageTabcntntico'
import api_skill_ico from '../../../images/skillicons/api.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#bbbfca',
    // borderColor: '#bbbfca'
    width: '120px'
    // paddingLeft:'10000'
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0} border={0} ><SkillPageIcons skillname={props.skillname} skillicon={props.skillicon}  fullstar={props.fullstar} halfstar={props.halfstar} emptystar={props.emptystar} /></Paper>
          </Grid>
       
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <Grid container item xs={6} spacing={1}>
          <FormRow fullstar={[1,1,1,1,1]} halfstar={[]} emptystar={[]} skillname='REST/SOAP API' skillicon={api_skill_ico} />
        </Grid>
        
      </Grid>
    </div>
  );
}