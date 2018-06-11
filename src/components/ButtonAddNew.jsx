import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  wrapButton: {
    width: '100%',
    maxWidth: '250px',
  },
  wrapInnerButton: {
    padding: theme.spacing.unit,
  },
  cardComposerTextarea: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%',
    border: 'none',
    resize: 'none',
    minHeight: 70,
    borderRadius: 2,
    fontSize: theme.spacing.unit * 2,
    outline: 'none',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  },
  openCardComposer: {
    flex: '0 0 auto',
    textDecoration: 'none',
    display: 'block',
    color: '#2d2d2d',
    backgroundColor: 'rgba(35, 35, 35, 0.12)',
    padding: '10px',
    '&:hover': {
      color: '#6ba1ce',
    }
  },
  cardComposer: {
    padding: '10px',
    backgroundColor: 'rgba(35, 35, 35, 0.12)',
    color: '#2d2d2d',
  },
  hide: {
    display: 'none',
  },
  buttonHover: {
    '&:hover': {
      cursor: 'grab',
    },
    '&:active': {
      cursor: 'grabbing',
    }
  },
})

class ButtonAddNew extends Component {
  state = {
    isOpen: false,
  };

  handleChangeCompooser = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={classes.wrapButton} >
          <div className={classNames(classes.cardComposer, isOpen ? '' : classes.hide)}>
            <textarea className={classes.cardComposerTextarea} placeholder="Добавить карточку..."></textarea>
            <IconButton>
              <AddBox color="secondary" />
            </IconButton>
            <IconButton onClick={this.handleChangeCompooser}>
              <Close color="secondary" />
            </IconButton>
          </div>

          <a className={classNames(classes.openCardComposer, isOpen ? classes.hide : '')} href="javascript:void(0);"
            onClick={this.handleChangeCompooser}>
            Добавить карточку...
          </a>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAddNew);
