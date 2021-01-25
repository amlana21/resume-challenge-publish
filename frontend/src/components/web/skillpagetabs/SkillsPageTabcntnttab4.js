import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import SkillPageIcons from './SkillsPageTabcntntico'
import python_skill_ico from '../../../images/skillicons/python_icon.png'
import nodejs_skill_ico from '../../../images/skillicons/nodejs_icon.png'
import js_skill_ico from '../../../images/skillicons/js_icon.png'
import react_skill_ico from '../../../images/skillicons/react_icon.png'
import java_skill_ico from '../../../images/skillicons/java.svg'
import dotnet_skill_ico from '../../../images/skillicons/dotnet_icon.png'
import html_skill_ico from '../../../images/skillicons/html_icon.png'
import css_skill_ico from '../../../images/skillicons/css_icon.png'

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
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='Python' skillicon={python_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='NodeJS' skillicon={nodejs_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='JavaScript' skillicon={js_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='REACT' skillicon={react_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1]} halfstar={[]} emptystar={[1,1,1]} skillname='Java' skillicon={java_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1]} halfstar={[]} emptystar={[1,1,1]} skillname='.NET' skillicon={dotnet_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='HTML' skillicon={html_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='CSS' skillicon={css_skill_ico} />
        </Grid>
      </Grid>
    </div>
  );
}