import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BoardHeader from './BoardHeader';
import BoardSidebar from './BoardSidebar';
import Board from './Board';
import { lists } from '../mock-data';

const styles = theme => ({
  appFrame: {
    flexGrow: 1,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

class BoardPage extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
        <div className={classes.appFrame}>
          <BoardHeader 
            handleOpen={() => this.handleDrawerOpen()} 
            open={open} 
          />
          <BoardSidebar 
            handleClose={() => this.handleDrawerClose()}
            open={open}
          />
          <Board open={open} data={lists} />
        </div>
    );
  }
}

export default withStyles(styles)(BoardPage);
