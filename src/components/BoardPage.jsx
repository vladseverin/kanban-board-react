import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BoardHeader from './BoardHeader';
import BoardSidebar from './BoardSidebar';
import Board from './Board';

const styles = () => ({
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
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    allIds: PropTypes.arrayOf(PropTypes.string),
    byIds: PropTypes.objectOf(PropTypes.object),
    addList: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
    editListTitle: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    editDescription: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
  }

  static defaultProps = {
    allIds: [],
    byIds: {},
  };

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
    const {
      classes,
      allIds,
      byIds,
      addList,
      addCard,
      editListTitle,
      removeCard,
      logout,
      editDescription,
      addComment,
      removeComment,
    } = this.props;
    const { open } = this.state;
    const arrayLists = allIds.map(id => byIds[id]);

    return (
      <div className={classes.appFrame}>
        <BoardHeader handleOpen={() => this.handleDrawerOpen()} open={open} />
        <BoardSidebar handleClose={() => this.handleDrawerClose()} open={open} logout={logout} />
        <Board
          open={open}
          data={arrayLists}
          addList={addList}
          addCard={addCard}
          editListTitle={editListTitle}
          removeCard={removeCard}
          editDescription={editDescription}
          addComment={addComment}
          removeComment={removeComment}
        />
      </div>
    );
  }
}

export default withStyles(styles)(BoardPage);
