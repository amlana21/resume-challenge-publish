import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 600,
    backgroundColor:'#bbbfca'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#a6a9b6'
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Technology Architect & Lead" {...a11yProps(0)} style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}} />
        <Tab label="Technical Architect (Sr. Consultant)" {...a11yProps(1)} style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}}  />
        <Tab label="Sr. Technical Lead(Consultant)" {...a11yProps(2)} style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}}  />
        <Tab label="Technical Lead(Consultant)" {...a11yProps(3)} style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}}  />
        <Tab label="Technical Analyst" {...a11yProps(4)} style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}}  />
        <Tab label="Programmer Trainee" {...a11yProps(5)} style={{color:'#214252',fontFamily:"'Caveat', cursive",fontWeight:'bold',fontSize:'20px'}}  />
        {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0} style={{position:'relative',height:'200px'}}>
        <b>Cognizant Technology Solutions, Irvine, USA (2018-)</b><br/><br/>
      ● Led a team of 8 offshore and 2 onshore resources to implement CRM on Oracle CX Cloud platform and migrate a financial service client’s current SAAS CRM <br/><br/>
      ● Developed a custom ETL tool in python(deployed on AWS) to migrate ~1 million records from legacy SAAS CRM to Oracle CX Cloud<br/><br/>
      ● Worked with a client team of 3 to gather requirements and provided a technical translation of 50 functional requirements from SAAS Oracle CRM to Oracle cloud components(Sales cloud, Oracle PAAS, Oracle CPQ)<br/><br/>
      ● Developed and deployed to AWS, a custom document migration solution using Python to migrate around 180 Gb of documents to Oracle sales cloud(CX Cloud)<br/><br/>
      ● Designed a full CRM cloud ecosystem architecture connecting Oracle Sales Cloud with 7 other cloud and On premise applications including(supporting 850 users)<br/><br/>
      ● Implemented a CI/CD pipeline in Jenkins to automate 5-6 changes per day for custom CRM solutions connected to Oracle CX Cloud apps like Sales cloud, Oracle CPQ cloud<br/><br/>
      ● Developed a custom web app to extend Oracle Sales cloud UI(for ~100 users). Developed utilizing JavaScript, HTML and CX cloud REST APIs and deployed on NodeJS(on AWS)<br/><br/>
      ● Developed a custom integration between Oracle CX Cloud and Docusign to support signing process for 50 Contracting users. Developed using Python and Javascript and deployed to AWS.
      </TabPanel>
      <TabPanel value={value} index={1}>
      <b>Cognizant Technology Solutions, Irvine, USA (2014-2018)</b><br/><br/>
      ● Worked in 1 CRM implementation for a financial services client leading team of 5 offshore resources, customizing Oracle SAAS CRM, coordinating with client team of 3 to implement client’s Lead Management, Sales process<br/><br/>
      ● Provided a SAAS/Cloud CRM solution architecture integrating SAAS CRM On Demand with 7 applications including top cloud apps like SFDC and Eloqua. Led the team to implement integrations using Fusion, Javascript, Java and REST API<br/><br/>
      ● Managed around 24 small deployments and 4 large deployments to deploy custom solutions to SAAS CRM On Demand and custom CRM extensions to AWS/On Premise<br/><br/>
      ● Developed a CI/CD pipeline in Jenkins to handle daily changes to Oracle SAAS CRM<br/><br/>
      ● Designed and developed 2 major system integrations integrating Oracle SAAS with client Product and Customer Hub systems Using Java, Python, JavaScript and REST API. These two integrations gave CRM users a unified view of customer base of ~100,000 customers and 850 Products.<br/><br/>
      ● Implemented 2 custom applications for SAAS Oracle CRM using Python, API and Javascript. The custom applications are a log monitoring and notification(Slack) tool, a custom ETL tool to handle day to day CRM data tasks<br/><br/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <b>Cognizant Technology Solutions, Chicago, USA/Irvine, USA (2012-2014)</b><br/><br/>
      ● Worked in 2 CRM Implementations for a leading medical instruments client and a financial services client, responsible for delivering CRM applications on Oracle SAAS CRM and Java, .NET, APIs<br/><br/>
      ● Provided a custom solution design mapping 10 CRM modules to technical components using Javascript, APIs and Java<br/><br/>
      ● Led a team of 2 onsite resources and 10 offshore resources, providing custom CRM solutions using SAAS CRM, Javascript, HTML and Java, for a financial services client<br/><br/>
      ● Designed and developed a custom Customer portal(supporting 500 customers), extending Oracle CRM functionality using Javascript, REST API, HTML and deployed to Apache server<br/><br/>
      ● Designed an end to end MDM process integrating Oracle CRM with EBS using Java and API. Led the team to develop and deploy the integration to windows servers<br/><br/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <b>Cognizant Technology Solutions, India (2010-2012)</b><br/><br/>
      ● Handled CRM technical trainings for 3 projects, 6 batch of resources with each batch containing 15-20 people<br/><br/>
      ● Worked as a team lead in a team of 3 people for a CRM implementation for a leading US Life Science company. Responsible to provide custom CRM solutions using CRM On Demand, .NET, JAVA and REST/SOAP API.<br/><br/>
      ● Worked as offshore technical lead, leading a team of 15 people in Implementing customized CRM On Demand for a leading US financial services client. Responsible for coordinating and tracking tasks across 15 team members<br/><br/>
      ● Designed and developed 3 custom solution/data interfaces between SAAS CRM and 3rd party systems like EBS, SQL DB using Java and Soap API<br/><br/>
      ● Managed 3 project audits and all documentation related to the CRM Projects<br/><br/>
      ● Mapped and developed CRM processes for 2 clients to custom technical solutions using custom SAAS CRM modules, Javascript, Java and APIs<br/><br/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <b>Cognizant Technology Solutions, India (2008-2010)</b><br/><br/>
      ● Worked as a Siebel Integration developer in the CRM implementation for a leading Insurance provider. Worked in a team of 10 resources and responsible to integrate Siebel with a data warehouse and managing project technical documents like design and admin documents.<br/><br/>
      ● Developed and deployed three utility tools for CRM On Demand which were used across 3 projects. Develop tools using .NET and SOAP webservices. The tools perform various automation and 3rd party integration tasks to and from SAAS CRM On Demand.<br/><br/>
      ● Worked as CRM On Demand developer in 2 CRM implementations for a leading digital design software manufacturer and a pharma company. Responsible to configure/customize CRM On demand to support client’s Partner Portal.<br/><br/>
      ● Developed custom solutions for SAAS CRM On Demand and 3rd party integrations, using .NET and SOAP API.<br/><br/>
      ● Managed technical design and requirement specs for 2 CRM Implementation projects<br/><br/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <b>Cognizant Technology Solutions, India (2007-2008)</b><br/><br/>
      ● Trained in Siebel and Oracle CRM On Demand<br/><br/>
      ● Involved in developing 2 automation tools for CRM On Demand using .NET and SOAP API which automate data and custom CRM functions<br/><br/>
      ● Involved in designing and presenting customized SAAS CRM solutions in CRMOD for 3 clients<br/><br/>
      </TabPanel>
    </div>
  );
}