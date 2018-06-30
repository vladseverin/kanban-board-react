import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import history from '../utils/history';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  list: {
    background: '#bbdefb;',
  },
  version: {
    marginLeft: theme.spacing.unit 
  }
});

class BoardSidebar extends Component {
  handleClick = () => {
    this.props.logout();
    localStorage.removeItem('KANABAN_TOKEN');
    history.push(`${process.env.PUBLIC_URL}${'/welcome'}`);  
  }

  render() {
    const { classes, open, handleClose } = this.props;
    return (
      <Drawer
        variant="persistent"
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
         
          <div className={classes.version}>
            v.1.0.0
          </div>
          <IconButton onClick={handleClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <List component="nav" >
          <ListItem button className={classes.list} onClick={this.handleClick}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>

      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles)(BoardSidebar));
