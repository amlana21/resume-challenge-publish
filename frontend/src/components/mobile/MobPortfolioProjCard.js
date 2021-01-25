import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import portprojback from '../../images/portprojback.png'

const useStyles = makeStyles({
  root: {
    // maxWidth: '345',
    maxWidth: '100%',
    backgroundColor: '#7a7a7a',
    backgroundImage: `url("${portprojback}")`
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:'#222831',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'30px'}} >
          {props.projname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.projicons.map((rw)=><img
            width="50" 
            height="50"
            style={{margin:'2px'}}
            alt={''}
            src={
              rw
            }
          />)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href={props.desc}   target="_blank"  rel="noopener" variant="body4" style={{color:'#a3d2ca',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}} >  Description</Link>
      <Link href={props.codelink}   target="_blank"  rel="noopener" variant="body4" style={{color:'#a3d2ca',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}} >  Code</Link>
        
      </CardActions>
    </Card>
  );
}