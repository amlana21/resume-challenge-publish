import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Aboutmetb1Cntnt(){
  return <Box p={1} >
  <Typography variant="h3" gutterBottom className='mobaboutmetab1box'>
    About Me
  </Typography>
  <Typography variant="h5" gutterBottom className='mobaboutmetab1txt'>
  Hello!!! Let me introduce myself. I am Amlan. I am a Cloud Architect by profession. I am currently working as an architect designing developing CRM ecosystems for various business and implementing them on the cloud.

  This is my portfolio/CV website where you will find more about my technical background and my experience working as a Technology professional.  

  <br/>
  I have been working in the Tech industry for last 13 years. During this time I have navigated through multiple roles. All of this time was spent around various applications in the CRM domain. I started as developer where I was bulding and configuring applications mostly related to backend CRM processes for various clients.   <br/><br/>I moved on to a more of technical architect role where I had to design the whole application ecosystem for client's backend CRM processes. I have worked on designing the architecture for how different applications/microservices will connect and work with each other in a larger backend ecosystem for multiple clients. I didnt just work on designing but I have also worked hands on building the applications and building the solutions to cater to the custom needs for various clients. In my current role and project I have worked in deploying a full fledged CRM application on Oracle cloud and connected the application to various other backend applications.   <br/><br/>To meet client requirements I had to build custom applications and components to extend the CRM application functionality. I worked on designing and developing those components and then deploying them to client's AWS/On Prem infrastructure. These custom components spanned across various langauages and technologies like Python, Javascript, deploying to Docker etc. I was responsible for designing and devloping various solutions and processes like an Analytics data warehouse for the CRM application, an ETL process to migrate data from legacy application to current CRM application etc. I am also responsible for moving all manual development steps to an automated CI/CD pipeline to have a faster and controlled delivery process.

  <br/><br/>

  As a Hobby I love learning new technologies and applying them by building various side projects.
  </Typography>
  </Box>
}

export default Aboutmetb1Cntnt