import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // position: 'relative',
    // left: '10px'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#79a3b1',
    borderWidth: '0'
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={20} ><Typography variant="h4" className='webmaintitlegridpaper' >{props.textbody}</Typography></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={[classes.root,'maintitlegrid'].join(' ')}>
      <Grid container spacing={1}>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='Oracle CX Cloud Soln Design & Development' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='Oracle PAAS tools Config and Management' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='AWS Solutions Design & Development' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='Custom Applications Design & Development' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='DevOps workflows design & Development' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='CRM Applications Design & Development' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='Cloud Architecture Design and Dev' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='CRM Business Process Development' />
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <FormRow textbody='AWS Certified Solution Architect' />
        </Grid>
      </Grid>
    </div>
  );
}
