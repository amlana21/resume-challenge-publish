import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PortfolioProjCard from './MobPortfolioProjCard'

import reactskill from '../../images/projicons/react_icon.png'
import pythonskill from '../../images/projicons/python_icon.svg'
import jenkinsskill from '../../images/projicons/jenkins_icon.png'
import jsskill from '../../images/projicons/js_icon.png'
import nodejsskill from '../../images/projicons/nodejs_icon.png'
import lambdaskill from '../../images/projicons/lambda_icon.png'
import chefskill from '../../images/projicons/chef_icon.png'
import awsskill from '../../images/projicons/aws_icon.png'
import dockerskill from '../../images/projicons/docker_icon.png'
import flaskskill from '../../images/projicons/flask_icon.png'
import htmlskill from '../../images/projicons/html_icon.svg'
import djangoskill from '../../images/projicons/django_icon.png'
import kubeskill from '../../images/projicons/kube_icon.png'

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

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <PortfolioProjCard projname={props.projname} desc={props.desc} codelink={props.codelink}  projicons={props.projicons} />
          
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
          <FormRow projname='A Movie Recommender Engine using K-Means and Collaborative Filtering & Deployed to Kubernetes' desc='https://cloudy.achakladar.com/a-movie-recommender-engine-using-k-means-and-collaborative-filtering-and-deployed-to-kubernetes-ckj7mj1280292w7s1bzxw4uiv' codelink='https://github.com/amlana21/ml-challenge-publish' projicons={[awsskill,pythonskill,reactskill,kubeskill,dockerskill,flaskskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow projname='A Zoom bot for a CRM application using AWS Lambda and Deployed via Jenkins' desc='https://amlanscloud.com/zoombot/' codelink='https://github.com/amlana21/zoom-chatbot-publish.git' projicons={[awsskill,jenkinsskill,nodejsskill,pythonskill,lambdaskill,flaskskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow projname='Full System Architecture of my React-Flask App' desc='https://amlanscloud.com/apparchitecture/' codelink='https://www.youtube.com/watch?v=Kc7SirxMwSQ' projicons={[pythonskill,awsskill,reactskill,dockerskill,kubeskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow projname='Stream Heroku logs to AWS Cloudwatch using an EC2 instance and Docker' desc='https://amlanscloud.com/herokulogsaws/' codelink='https://github.com/amlana21/heroku-logs-to-aws-publish.git' projicons={[awsskill,dockerskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow projname='Integrate CRM Application with Alexa (Python, AWS Lambda)' desc='https://amlanscloud.com/alexa-crm-integration-2/' codelink='https://github.com/amlana21/alexa-crm-integration-post' projicons={[pythonskill,awsskill,lambdaskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Manage DR for a WordPress blog (in AWS)' desc='https://medium.com/faun/dr-environment-wordpress-c85965a59984' codelink='https://medium.com/faun/dr-environment-wordpress-c85965a59984' projicons={[awsskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Log Monitoring Tool (Python)' desc='https://github.com/amlana21/logmonitoringpython' codelink='https://github.com/amlana21/logmonitoringpython'  projicons={[pythonskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='CHEF Recipe for Jenkins' desc='https://github.com/amlana21/chefjenkinsinstall' codelink='https://github.com/amlana21/chefjenkinsinstall'  projicons={[chefskill,jenkinsskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Example Full Jenkins Flow' desc='https://github.com/amlana21/jenkinssampleflow' codelink='https://github.com/amlana21/jenkinssampleflow'  projicons={[jenkinsskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Collection of Dockerfiles' desc='https://github.com/amlana21/dockerbuildfiles' codelink='https://github.com/amlana21/dockerbuildfiles'  projicons={[dockerskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Python Cheat Books' desc='https://github.com/amlana21/python-cheatbooks' codelink='https://github.com/amlana21/python-cheatbooks'  projicons={[pythonskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Slack Clone (Python/Flask)' desc='https://flack-app-ac.herokuapp.com/' codelink='https://github.com/amlana21/Flask-Chat'  projicons={[pythonskill,flaskskill,jsskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Game of 21 (HTML/Javascript)' desc='https://mygameof21.netlify.app/' codelink='https://github.com/amlana21/gameof21'  projicons={[jsskill,htmlskill,nodejsskill]} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <FormRow projname='Personal Entertainment Repo Manager' desc='https://github.com/amlana21/private-entertainment-repo-app' codelink='https://github.com/amlana21/private-entertainment-repo-app'  projicons={[pythonskill,jsskill,djangoskill]} />
        </Grid>
      </Grid>
    </div>
  );
}