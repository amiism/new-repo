import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ForumRounded from '@material-ui/icons/ForumRounded';
import StoreRounded from '@material-ui/icons/StoreRounded';
import WorkRounded from '@material-ui/icons/WorkRounded';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderColor: "#000",
    boxShadow: 'none',
    },
  tabnav: {
    color: 'white',
    backgroundColor: '#3f51b5',
    border: 0,
  },
  inditab:{
    indicatorColor: 'white',
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs value={value} className={classes.tabnav} onChange={handleChange} centered >
        <Tab label="Forum" className={classes.inditab} icon={<ForumRounded />} component={Link} to="/forum"/>
        <Tab label="Shop" className={classes.inditab} icon={<StoreRounded />} component={Link} to="/shop"/>
        <Tab label="Job" className={classes.inditab} icon={<WorkRounded />} component={Link} to="/job"/>
      </Tabs>
    </Paper>
  );
}