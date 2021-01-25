import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import SkillPageIcons from './SkillsPageTabcntntico'
import jenkins_skill_ico from '../../../images/skillicons/jenkins_icon.png'
import aws_skill_ico from '../../../images/skillicons/aws_icon.png'
import chef_skill_ico from '../../../images/skillicons/chef_icon.png'
import cf_skill_ico from '../../../images/skillicons/cloudformation.svg'

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
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='Jenkins' skillicon={jenkins_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='AWS Devops Tools' skillicon={aws_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1,1]} halfstar={[1]} emptystar={[]} skillname='CHEF' skillicon={chef_skill_ico} />
        </Grid>
        <Grid container item xs={2} spacing={1}>
          <FormRow fullstar={[1,1,1]} halfstar={[]} emptystar={[1,1]} skillname='AWS Cloudformation' skillicon={cf_skill_ico} />
        </Grid>
        
      </Grid>
    </div>
  );
}