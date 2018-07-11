import React, { Component } from 'react';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import Close from '@material-ui/icons/Close';
import Card from './Card';
import CardListHeader from './CardListHeader';

const styles = theme => ({
  wrapList: {
    height: '100%',
    backgroundColor: '#fafafa',
    padding: theme.spacing.unit,
    margin: '0px 8px 8px 8px',
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
    borderRadius: 2,
    outline: 'none',
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  },
  openCardComposer: {
    flex: '0 0 auto',
    textDecoration: 'none',
    display: 'block',
    color: '#2d2d2d',
    backgroundColor: 'rgba(35, 35, 35, 0.12)',
    padding: '10px',
    cursor: 'pointer',
    '&:hover': {
      color: '#6ba1ce',
    },
  },
  hide: {
    display: 'none',
  },
});

class CardsList extends Component {
  state = {
    inputText: '',
  };

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  hanldeAddCard = () => {
    const { addCard, handleClose, ...list } = this.props;
    const { inputText } = this.state;

    if (!inputText || inputText === '\n') {
      this.setState({
        inputText: '',
      });
      return null;
    }

    addCard(list._id, uuidv4(), inputText);

    this.setState({
      inputText: '',
    });

    handleClose();
  };

  hanldeKeyAddCard = (e) => {
    const { addCard, handleClose, ...list } = this.props;
    const { inputText } = this.state;

    if (!inputText || inputText === '\n') {
      this.setState({
        inputText: '',
      });
      return null;
    }

    if (e.key === 'Enter') {
      addCard(list._id, uuidv4(), inputText);
      this.setState({
        inputText: '',
      });
      handleClose();
    }
  };

  toggleOpen = (e) => {
    e.preventDefault();
    const { toggleOpen } = this.props;

    toggleOpen();
  };

  render() {
    const {
      classes,
      title,
      cards,
      isOpen,
      handleClose,
      removeCard,
      editListTitle,
      editDescription,
      addComment,
      removeComment,
      ...list
    } = this.props;
    const { inputText } = this.state;

    return (
      <Paper className={classes.wrapList}>
        <CardListHeader title={title} editListTitle={editListTitle} {...list} />

        {cards && cards.length
          ? cards.map(card => (
            <Card
              removeComment={removeComment}
              addComment={addComment}
              editDescription={editDescription}
              removeCard={removeCard}
              task={card.cardName}
              key={card.cardId}
              description={card.description}
              comments={card.comments}
              {...list}
              {...card}
            />
          ))
          : console.log("Сards don't exist")}

        <div className={classNames(classes.cardComposer, isOpen ? '' : classes.hide)}>
          <textarea
            value={inputText}
            onChange={this.handleChange}
            placeholder="Add new card..."
            className={classes.cardComposerTextarea}
            onKeyPress={this.hanldeKeyAddCard}
            ref={textarea => textarea && textarea.focus()}
          />
          <IconButton onClick={this.hanldeAddCard}>
            <AddBox color="secondary" />
          </IconButton>
          <IconButton onClick={handleClose}>
            <Close color="secondary" />
          </IconButton>
        </div>

        {/* eslint-disable-next-line */}
        <a
          className={classNames(classes.openCardComposer, isOpen ? classes.hide : '')}
          onClick={this.toggleOpen}
        >
          Add new card...
        </a>
      </Paper>
    );
  }
}

export default withStyles(styles)(CardsList);
