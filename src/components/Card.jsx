import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Create from '@material-ui/icons/Create';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  listCards: {
    flex: '1 1 auto',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
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
    '&:hover': {
    },
  },
  byName: {
    opacity: 0.6,
    borderTop: '1px solid #c7bcbc',
    paddingTop: theme.spacing.unit,
    textAlign: 'right',
    fontSize: '12px',
    color: 'black',
  },
});

class Card extends Component {
  state = {
    anchorEl: null,
    popupOpen: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleRemoveCard = () => {
    const { removeCard, ...list} = this.props;
    const { ...card } = this.props;
    
    removeCard(list._id, card.cardId);
    this.handleClose();
  }

  handleClickPopupOpen = () => {
    this.setState({ popupOpen: true });
    this.handleClose();
  };

  handlePopupClose = () => {
    this.setState({ popupOpen: false });
  };

  render() {
    const { classes, task, ...list } = this.props;
    const { anchorEl, popupOpen } = this.state;
    const username = localStorage.getItem('KANABAN_TOKEN');

    return (
      <div className={classes.listCards}>
        <Paper className={classes.listCard}>
          <IconButton className={classes.editButton} variant='flat' onClick={this.handleClick}>
            <Create style={{ fontSize: 15 }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClickPopupOpen}>Edit</MenuItem>
            <MenuItem onClick={this.handleRemoveCard}>Delete</MenuItem>
          </Menu>
          <Typography className={classes.listCardTitle} variant="body1" component="span">
            {task}
          </Typography >
          <Typography className={classes.byName}>
            ...created by {username}
          </ Typography >

          <Dialog
            open={popupOpen}
            onClose={this.handlePopupClose}
          >
            <DialogTitle>List: {list.nameList} | Card: {task} | Creator: {username}</DialogTitle>
            <DialogContent>
              <h3> Description </h3>
              <textarea></textarea>
            
            </DialogContent>
            <DialogContent>
              <h3> Adding a comment </h3>
              <textarea></textarea>
            
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handlePopupClose} color="secondary">
                Save
            </Button>
              <Button onClick={this.handlePopupClose} autoFocus>
                Close
            </Button>
            </DialogActions>
          </Dialog>

        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
