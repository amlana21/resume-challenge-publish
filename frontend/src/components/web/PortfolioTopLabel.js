import React from 'react';
// import { SliderPicker } from 'react-color';
import Box from '@material-ui/core/Box';
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import topLabelBtnback from '../../images/toplabelbtn.png'

const NeumorphShadow = (props) => {
    const [bgColor, setBgColor] = React.useState('#797a7e');
    const classes = useNeumorphShadowStyles({ bgColor });
    return (
      <>
        <Box
          p={1}
          bgcolor={bgColor}
          width={'100%'}
          height={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flex={1}
          className='toplabelback'
        >
          <Box style={{position:'absolute',left:'10px'}}><IconButton aria-label="back">
          <ArrowBackIcon fontSize='large' onClick={()=>props.backBtn()} />
      </IconButton></Box>
          <Box classes={classes} style={{backgroundColor:'#686d76',backgroundImage: "url(" + topLabelBtnback + ")"}} borderRadius={16} width={240} height={'100%'} justifyContent={'center'} alignItems={'center'}>
          <div style={{position:'relative',margin:'auto',left:'20%'}}><Typography variant="h3" gutterBottom className='aboutmetoplabel'>
    {props.bodytext}
  </Typography></div>
          
          </Box>
        </Box>
      </>
    );
  };
  
  export default NeumorphShadow;