import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import SkillPageIcons from './SkillsPageTabcntntico'
import docker_skill_ico from '../../../images/skillicons/docker_icon.png'
import kube_skill_ico from '../../../images/skillicons/kube_icon.png'
import git_skill_ico from '../../../images/skillicons/git_icon.png'
import mvn_skill_ico from '../../../images/skillicons/mvn_icon.png'
import gradle_skill_ico from '../../../images/skillicons/gradle_icon.png'
import lambda_skill_ico from '../../../images/skillicons/lambda_icon.png'

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
          <Paper className={classes.paper} elevation={0} border={0} ><SkillPageIcons skillname={props.skillname} skillicon={props.skillicon} fullstar={props.fullstar} halfstar={props.halfstar} emptystar={props.emptystar}  /></Paper>
          </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='Docker' skillicon={docker_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='Kubernetes' skillicon={kube_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1,1]} halfstar={[]} emptystar={[]} skillname='GIT' skillicon={git_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='Maven' skillicon={mvn_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1]} halfstar={[]} emptystar={[1,1,1]} skillname='Gradle' skillicon={gradle_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1,1]} halfstar={[]} emptystar={[]} skillname='AWS Lambda' skillicon={lambda_skill_ico} />
        </Grid>
      </Grid>
    </div>
  );
}