import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AddListButton from './AddListButton';
import CardsList from './CardsList';


const drawerWidth = 240;

const styles = theme => ({
  content: {
    overflowY: 'scroll',
    paddingTop: theme.spacing.unit * 8,
    flexGrow: 1,
    backgroundColor: '#d9eeff',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentLeft: {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentShiftLeft: {
    marginLeft: 0,
  },
  wrapBoard: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexFlow: 'row wrap',
    marginTop: theme.spacing.unit,
  },
});

class Board extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    open: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      cards: PropTypes.arrayOf(PropTypes.shape({
        cardName: PropTypes.string.isRequired,
      })),
      name: PropTypes.string,
    })),
  }

  static defaultProps = {
    data: [],
  }

  state = {
    openTextariaInputId: null
  }

  toggleOpenTextariaInput(openTextariaInputId) {
    this.setState({ openTextariaInputId });
  }

  handleClose = () => {
    this.setState({
      openTextariaInputId: null,
    })
  }

  render() {
    const { classes, open, data, addList, addCard, editListTitle, removeCard} = this.props;
    const { openTextariaInputId } = this.state;

    return (
      <main
        className={classNames(classes.content, classes.contentLeft, {
          [classes.contentShift]: open,
          [classes.contentShiftLeft]: open,
        })}
      >
        <div className={classes.wrapBoard}>
          {
            data && data.length ? (
              data.map((list) => 
                <CardsList 
                  addCard={addCard}
                  editListTitle={editListTitle}
                  removeCard={removeCard}
                  title={list.nameList} 
                  key={list._id}  
                  isOpen={list._id === openTextariaInputId}
                  toggleOpen={this.toggleOpenTextariaInput.bind(this, list._id)}
                  handleClose={this.handleClose}
                  {...list}
                />
              )
            ) : (
              console.log('List don\'t exist')
            )
          }
          <AddListButton addList={addList} />
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Board);
