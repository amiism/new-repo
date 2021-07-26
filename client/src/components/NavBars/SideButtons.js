import React, { Component } from 'react';
import AddCircle from '@material-ui/icons/AddCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToApp from '@material-ui/icons/ExitToApp';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';

import {Link} from 'react-router-dom';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class SideButtons extends Component{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    
    render(){
        const { user } = this.props.auth;
        return(
            <>
                <List>
                  <ListItem button key='AddChannel'>
                    <Link style={{ textDecoration: 'none' }} to="/main"><ListItemIcon><AddCircle /></ListItemIcon></Link>
                  <ListItemText primary='AddChannel' />
                  </ListItem>
                  {['CS2105', 'MA1521'].map((text, index) => (
                      <ListItem button key={text}>
                      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                      </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  <ListItem button key='logout' onClick={this.onLogoutClick}>
                    <ListItemIcon><ExitToApp /></ListItemIcon>
                    <ListItemText primary='logout' />
                  </ListItem>
                </List>
            </>
        );
    }
}

SideButtons.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(SideButtons);