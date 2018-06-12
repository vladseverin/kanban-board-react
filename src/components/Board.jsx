import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AddListButton from './AddListButton';
import CardsList from './CardsList';

const drawerWidth = 240;

const styles = theme => ({
  content: {
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
  render() {
    const { classes, open, data } = this.props;

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
              data.map((list, id) => 
                <CardsList title={list.name} key={id} {...list} />
              )
            ) : (
                console.log('List do not exist')
            )
          }
          <AddListButton />
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Board);
