import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import SkillPageIcons from './MobSkillsPageTabcntntico'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // paddingLeft:'10000'
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper} border={0} ><SkillPageIcons /></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}