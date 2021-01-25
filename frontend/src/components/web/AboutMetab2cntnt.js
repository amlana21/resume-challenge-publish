import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

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
          <Typography variant="h4" className='webaboutmetab2box' >B.E, Electronic & Communications</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
          People’s Education
Society Institute of Technology (India)(2007)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  style={{backgroundColor: '#898b8a'}} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h4" className='webaboutmetab2box' >School (Class 11 & 12)</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{backgroundColor: '#e4e3e3'}}  >
          <Typography>
            Kendriya Vidyalaya, India, 2000-2002
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}