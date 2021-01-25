import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h4" className='webaboutmetab2box' >Blog</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          <Link href='https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=YW6173GC2FFEQCK3'   target="_blank"  rel="noopener" variant="body4" >  Click</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h4" className='webaboutmetab2box' >LinkedIn</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          <Link href='https://www.linkedin.com/in/amlan-chakladar-40339525/'   target="_blank"  rel="noopener" variant="body4" >  Click</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h4" className='webaboutmetab2box' >Github</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          <Link href='https://github.com/amlana21'   target="_blank"  rel="noopener" variant="body4" >  Click</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="h4" className='webaboutmetab2box' >Dockerhub</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          <Link href='https://hub.docker.com/u/awsacdev'   target="_blank"  rel="noopener" variant="body4" >  Click</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant="h4" className='webaboutmetab2box' >Dev.to</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          <Link href='https://dev.to/amlana24'   target="_blank"  rel="noopener" variant="body4" >  Click</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant="h4" className='webaboutmetab2box' >Twitter</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          <Link href='https://twitter.com/amlana24'   target="_blank"  rel="noopener" variant="body4" >  Click</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant="h4" className='webaboutmetab2box' >Contact Me</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
           <i><b>Email:</b></i> amlanc@achakladar.com
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}