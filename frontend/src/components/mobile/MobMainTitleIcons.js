import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import mainLinkedin from '../../images/main_title_linkedin.svg'
import mainGithub from '../../images/main_title_github.svg'
import mainBlog from '../../images/main_title_blog.svg'
import mainCv from '../../images/main_title_cv.svg'
import emailico from '../../images/emailicon.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    left: '16%',
    hover:{
      cursor: 'pointer'
    }
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  function openNewPage(url){
    window.open(url,'_blank')
  }

  return (
    <div className={classes.root}>
      <Avatar alt="linkedin" src={mainLinkedin} className={[classes.large,'maintitleicons'].join(' ')} onClick={()=>openNewPage('https://www.linkedin.com/in/amlan-chakladar-40339525/')} />
      <Avatar alt="github" src={mainGithub} className={[classes.large,'maintitleicons'].join(' ')} onClick={()=>openNewPage('https://github.com/amlana21')}  />
      <Avatar alt="blog" src={mainBlog} className={[classes.large,'maintitleicons'].join(' ')} onClick={()=>openNewPage('https://amlanscloud.com')}  />
      <Avatar alt="cv" variant="square" src={mainCv} className={[classes.large,'maintitleicons'].join(' ')} onClick={()=>openNewPage('https://drive.google.com/file/d/1_Cb-j-yPpXi-u4RCGbwH8aiJh9RSd6zO/view?usp=sharing')}  />
      <Avatar alt="email" variant="square" src={emailico}  className={[classes.large,'maintitleicons'].join(' ')} onClick={()=>openNewPage('mailto:amlanc@achakladar.com')}  />
    </div>
  );
}