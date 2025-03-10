import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SkillsPagetbcntnt from './skillpagetabs/MobSkillsPageTabcntnt'
import SkillsPagetbcntnttab2 from './skillpagetabs/MobSkillsPageTabcntnttab2'
import SkillsPagetbcntnttab3 from './skillpagetabs/MobSkillsPageTabcntnttab3'
import SkillsPagetbcntnttab4 from './skillpagetabs/MobSkillsPageTabcntnttab4'
import SkillsPagetbcntnttab5 from './skillpagetabs/MobSkillsPageTabcntnttab5'
import SkillsPagetbcntnttab6 from './skillpagetabs/MobSkillsPageTabcntnttab6'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    
    backgroundColor: theme.palette.background.paper,
    // width: '415px',
    width: '100%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
       <AppBar position="static">
        <Tabs
          // variant="fullWidth"
          variant="scrollable"
          indicatorColor="primary"
          scrollButtons="on"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Cloud" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="CI/CD & Tools" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Platforms & Tools" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Languages/Frameworks" href="/spam" {...a11yProps(3)} />
          <LinkTab label="SAAS Apps" href="/spam" {...a11yProps(4)} />
          <LinkTab label="Misc" href="/spam" {...a11yProps(5)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className='mobskillspanel' >
          <SkillsPagetbcntnt />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className='mobskillspanel'>
          <SkillsPagetbcntnttab2 />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className='mobskillspanel'>
        <SkillsPagetbcntnttab3 />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} className='mobskillspanel'>
        <SkillsPagetbcntnttab4 />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction} className='mobskillspanel'>
        <SkillsPagetbcntnttab5 />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction} className='mobskillspanel'>
        <SkillsPagetbcntnttab6 />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}