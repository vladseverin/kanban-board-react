import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';
import history from '../utils/history';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#454545',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    color: '#fafafa',
    ...theme.mixins.toolbar,
  },
  list: {
    background: '#fafafa',
    borderRadius: 2,
  },
  version: {
    marginLeft: theme.spacing.unit,
  },
  rowIcon: {
    color: '#fafafa',
  },
});

class BoardSidebar extends Component {
  handleClick = () => {
    const { logout } = this.props;
    logout();
    localStorage.removeItem('KANABAN_TOKEN');
    history.push(`${process.env.PUBLIC_URL}${'/welcome'}`);
  };

  render() {
    const { classes, open, handleClose } = this.props;
    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={classes.version}>
v.1.0.0
          </div>
          <IconButton className={classes.rowIcon} onClick={handleClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <ListItem button className={classes.list} onClick={this.handleClick}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles)(BoardSidebar));
