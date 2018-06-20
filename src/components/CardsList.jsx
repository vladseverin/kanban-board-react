import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import AddBox from '@material-ui/icons/AddBox';
import Close from '@material-ui/icons/Close';
import Card from './Card';
import { generateKey } from '../utils/keyGenerator';

const styles = theme => ({
  wrapList: {
    width: 270,
    height: '100%',
    backgroundColor: '#fafafa',
    padding: theme.spacing.unit,
    margin: '0px 8px 8px 8px',
  },
  listHeader: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: theme.spacing.unit,
    fontWeight: 'bold',
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
  hide: {
    display: 'none',
  },
  buttonTransfer: {
    width: '30px',
    height: '30px',
    '&:hover': {
      cursor: 'grab',
    },
    '&:active': {
      cursor: 'grabbing',
    }
  },
});

class CardsList extends Component {
  state = {
    inputText: '',
  };

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  hanldeAddCard = () => {
    const { addCard, handleClose, ...list,} = this.props;
    const { inputText } = this.state;

    addCard(list._id, generateKey(inputText), inputText);

    this.setState({
      inputText: '',
    });

    handleClose();
  }

  toggleOpen = (event) => {
    event.preventDefault();

    this.props.toggleOpen();
  }

  render() {
    const { classes, title, cards, isOpen, handleClose } = this.props;
    const { inputText } = this.state;

    return (
      <Paper className={classes.wrapList} >
        <Typography className={classes.listHeader} variant="subheading" component="h3">
          {title}
          <IconButton className={classes.buttonTransfer}>
            <ViewHeadline />
          </IconButton>
        </Typography>

        {
          cards && cards.length ? (
            cards.map((card, id) => 
              <Card
                task={card.cardName} 
                key={id}
              />
            )
          ) : (
              console.log('Сards don\'t exist')
          )
        }

        <div className={classNames(classes.cardComposer, isOpen ? '' : classes.hide)}>
          <textarea 
            value={inputText} 
            onChange={this.handleChange}
            placeholder="Добавить карточку..." 
            className={classes.cardComposerTextarea}>
          </textarea>
          <IconButton onClick={this.hanldeAddCard}>
            <AddBox color="secondary" />
          </IconButton>
          <IconButton onClick={handleClose}>
            <Close color="secondary" />
          </IconButton>
        </div>

        <a className={classNames(classes.openCardComposer, isOpen ? classes.hide : '')}
          onClick={this.toggleOpen}>
          Добавить карточку...
        </a>
      </Paper>
    );
  }
}

export default withStyles(styles)(CardsList);
