import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ForumRounded from '@material-ui/icons/ForumRounded';
import StoreRounded from '@material-ui/icons/StoreRounded';
import WorkRounded from '@material-ui/icons/WorkRounded';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered >
        <Tab label="Forum" icon={<ForumRounded />} component={Link} to="/forum"/>
        <Tab label="Shop" icon={<StoreRounded />} component={Link} to="/shop"/>
        <Tab label="Job" icon={<WorkRounded />} component={Link} to="/job"/>
      </Tabs>
    </Paper>
  );
}