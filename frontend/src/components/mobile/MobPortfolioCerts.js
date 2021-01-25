import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import awsskill from '../../images/certicons/awssa.png'
import awsdev from '../../images/certicons/awsdev.png'
import chefinfra from '../../images/certicons/chefinfra.png'
import cheflogo from '../../images/certicons/cheflogo.svg'
import devopsmicro from '../../images/certicons/devopsmicro.png'
import harvardx from '../../images/certicons/harvardx.png'
import azurefund from '../../images/certicons/azurefund.png'
import ibmml from '../../images/certicons/ibmml.png'
import stanfordpython from '../../images/certicons/stanfordpython.png'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="150" 
            height="150"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              awsskill
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography >
          <Link href='https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=YW6173GC2FFEQCK3'   target="_blank"  rel="noopener" variant="body4" >  AWS Solution Architect Associate</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="150" 
            height="150"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              awsdev
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
          <Link href='https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=YW6173GC2FFEQCK3'   target="_blank"  rel="noopener" variant="body4" >  Verify</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="100" 
            height="100"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              chefinfra
            }
          /><img
          width="100" 
          height="100"
          style={{margin:'2px'}}
          alt={''}
          src={
            // props.skillicon
            cheflogo
          }
        /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
          <Link href='https://badgr.com/public/assertions/0c3fcHAnQgikI7_Gv8SnzA'   target="_blank"  rel="noopener" variant="body4" >  CHEF Infra Automation, CHEF</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="180" 
            height="50"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              devopsmicro
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
          <Link href='https://courses.edx.org/certificates/fe1af334654547b3a14ee1bc8d03529d'   target="_blank"  rel="noopener" variant="body4" >  DevOps for Developers</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="180" 
            height="50"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              harvardx
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
            <Link href='https://courses.edx.org/certificates/754fb47d986d4c3bb41d8dbedbc91412'   target="_blank"  rel="noopener" variant="body4" >Web Programming with Python and JavaScript, HarvardX - EDX</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="150" 
            height="150"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              azurefund
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
          <Link href='https://www.youracclaim.com/badges/5f2fd826-d85b-4ec7-a3fd-4ecc991d4b0e/public_url'   target="_blank"  rel="noopener" variant="body4" >Azure Fundamentals- Microsoft</Link><br/>
          <Link href='https://mycertificates-ac.s3.amazonaws.com/Microsoft_Certified_Professional_Certificate_0.pdf'   target="_blank"  rel="noopener" variant="body4" >Certificate</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="300" 
            height="50"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              ibmml
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
          <Link href='https://courses.edx.org/certificates/045c7c50eb094a6ba756cc942192f830'   target="_blank"  rel="noopener" variant="body4" >Machine Learning With Python</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography variant="h4" className='mobaboutmetab2box' ><img
            width="300" 
            height="50"
            style={{margin:'2px'}}
            alt={''}
            src={
              // props.skillicon
              stanfordpython
            }
          /></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#e4e3e3'}} >
          <Typography>
          <Link href='https://mycertificates-ac.s3.amazonaws.com/andrew_ng_ML.pdf'   target="_blank"  rel="noopener" variant="body4" >Machine Learning- Andrew Ng , Stanford</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}