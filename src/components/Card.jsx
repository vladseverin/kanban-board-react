import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Create from '@material-ui/icons/Create';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Description from '@material-ui/icons/Description';
import Comment from '@material-ui/icons/Comment';
import PopupEditMenu from './PopupEditMenu';

const styles = theme => ({
  listCards: {
    flex: '1 1 auto',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  listCard: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  listCardTitle: {
    display: 'inline-block',
    marginBottom: theme.spacing.unit,
  },
  editButton: {
    display: 'flex',
    marginLeft: 'auto',
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3,
    '&:hover': {},
  },
  byInfo: {
    opacity: 0.6,
    borderTop: '1px solid #c7bcbc',
    paddingTop: theme.spacing.unit,
    textAlign: 'right',
    fontSize: '12px',
    color: 'black',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
  },
  creator: {
    marginLeft: 'auto',
  },
  isDescription: {
    fontSize: 18,
  },
  wrapIcoComments: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '15px',
  },
});

class Card extends Component {
  state = {
    anchorEl: null,
    popupOpen: false,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleRemoveCard = () => {
    const { removeCard, ...list } = this.props;
    const { ...card } = this.props;

    removeCard(list._id, card.cardId);
    this.handleClose();
  };

  handleClickPopupOpen = () => {
    this.setState({ popupOpen: true });
    this.handleClose();
  };

  handlePopupClose = () => {
    this.setState({ popupOpen: false });
  };

  render() {
    const {
      classes,
      task,
      editDescription,
      key,
      description,
      comments,
      addComment,
      removeComment,
      ...list
    } = this.props;
    const { anchorEl, popupOpen } = this.state;
    const username = localStorage.getItem('KANABAN_TOKEN');

    const isComments = (
      <div className={classes.wrapIcoComments}>
        <Comment className={classes.isDescription} />
        {comments.length}
      </div>
    );

    return (
      <div className={classes.listCards}>
        <Paper className={classes.listCard}>
          <IconButton className={classes.editButton} variant="flat" onClick={this.handleClick}>
            <Create style={{ fontSize: 15 }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClickPopupOpen}>
Edit
            </MenuItem>
            <MenuItem onClick={this.handleRemoveCard}>
Delete
            </MenuItem>
          </Menu>
          <Typography className={classes.listCardTitle} variant="body1" component="span">
            {task}
          </Typography>

          <div className={classes.byInfo}>
            {description && <Description className={classes.isDescription} />}
            {comments.length !== 0 && isComments}
            <div className={classes.creator}>
              {/* eslint-disable-next-line */}
              ...created by {username}
            </div>
          </div>

          <PopupEditMenu
            onPopupClose={this.handlePopupClose}
            username={username}
            popupOpen={popupOpen}
            task={task}
            editDescription={editDescription}
            cardId={key}
            description={description}
            addComment={addComment}
            removeComment={removeComment}
            comments={comments}
            {...list}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
