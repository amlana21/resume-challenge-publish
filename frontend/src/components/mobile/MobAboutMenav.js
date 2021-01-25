import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';
import AboutmeTab1cntnt from './MobAboutMetab1cntnt'
import AboutmeTab2cntnt from './MobAboutMetab2cntnt'
import AboutmeTab3cntnt from './MobAboutMetab3cntnt'
import LanguageIcon from '@material-ui/icons/Language';

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

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#bbbfca',
    // width: '100%',
    // overflow:'scroll'
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
      <AppBar position="static" color="default" className='mobaboutmecontentframe'>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<InfoTwoToneIcon />} label="about" />
        <Tab icon={<CastForEducationTwoToneIcon />} label="education" />
        <Tab icon={<LanguageIcon />} label="profiles & contacts" />
      </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
       <TabPanel value={value} index={0} dir={theme.direction} className='mobaboutmetabpanel'>
        <AboutmeTab1cntnt />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction} className='mobaboutmetabpanel'>
        <AboutmeTab2cntnt />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction} className='mobaboutmetabpanel'>
        <AboutmeTab3cntnt />
      </TabPanel>
      </SwipeableViews>
    </div>
  );
}