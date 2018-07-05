import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import Close from '@material-ui/icons/Close';
import ErrorMessage from './ErrorMessage';
import uuidv4 from 'uuid/v4';

const styles = theme => ({
  wrapButton: {
    width: '100%',
    padding: '0 12px 0 12px',
  },
  wrapInnerButton: {
    padding: theme.spacing.unit,
  },
  cardComposerTextarea: {
    fontSize: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%',
    border: 'none',
    resize: 'none',
    minHeight: 70,
    borderRadius: 4,
    outline: 'none',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  },
  openCardComposer: {
    flex: '0 0 auto',
    padding: '10px',
    backgroundColor: '#fafafa',
    width: '100%',
    border: 'none',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    outline: 'none',
    cursor: 'pointer',
    fontSize: theme.spacing.unit * 2,
    textAlign: 'left',
    borderRadius: 4,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    '&:hover': {
      color: '#6ba1ce',
    },
  },
  cardComposer: {
    padding: '10px',
    backgroundColor: '#fafafa',
    borderRadius: 4,
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

class AddListButton extends Component {
  state = {
    isOpen: false,
    inputText: '',
    error: false
  };

  handleChangeCompooser = (event) => {
    event.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen,
      inputText: '',
    });
  };

  hanldeAddList = () => {
    const { inputText } = this.state;
    
    if (!inputText || inputText === `\n`) {
      this.setState({
        inputText: '',
      });
      return null;
    }

    this.props.addList(uuidv4(), inputText)

    this.setState({ 
      isOpen: !this.state.isOpen, 
      inputText: '', 
    });
  };

  hanldeKeyAddList = (e) => {
    const { inputText } = this.state;

    if (!inputText || inputText === `\n`) {
      this.setState({
        inputText: '',
      });
      return null;
    }

    if (e.key === 'Enter') {
      this.props.addList(uuidv4(), inputText)

      this.setState({
        isOpen: !this.state.isOpen,
        inputText: '',
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { isOpen, inputText } = this.state;
    return (
      <div className={classes.wrapButton} >
        
        <div className={
          classNames(classes.cardComposer, 
            isOpen 
            ? '' 
            : classes.hide
        )}>
          <textarea
            required 
            className={classes.cardComposerTextarea} 
            value={inputText} 
            onChange={this.handleChange}
            placeholder="Add new list..."
            onKeyPress={this.hanldeKeyAddList} 
            ref={textarea => textarea && textarea.focus()} />
          <IconButton onClick={this.hanldeAddList}>
            <AddBox color="secondary" />
          </IconButton>
          <IconButton onClick={this.handleChangeCompooser}>
            <Close color="secondary" />
          </IconButton>
        </div>
        <button 
          onClick={this.handleChangeCompooser}
          className={
            classNames(classes.openCardComposer, 
              isOpen 
              ? classes.hide 
              : ''
            )}
        >
          Add new list...
        </button>

        <ErrorMessage inputText={inputText} errorMessage={'Заполните поле перед добавлением!'} />
      </div>
    );
  }
}

export default withStyles(styles)(AddListButton);
