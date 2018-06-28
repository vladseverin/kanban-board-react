import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Web from '@material-ui/icons/Web';
import Description from '@material-ui/icons/Description';
import Comment from '@material-ui/icons/Comment';

const styles = theme => ({
  wrapInnerPopup: {
    minWidth: '320px',
    padding: '0px 40px',
  },
  headerPopup: {
    padding: '24px 0',
  },
  contentPopup: {
    padding: '0 0 24px 0',
  },
  customStyle: {
    position: 'absolute',
    left: '-27px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  mainTitle: {
    position: 'relative',
    color: '#2d2d2d',
  },
  title: {
    position: 'relative',
    color: '#2d2d2d',
    marginBottom: '8px',
  },
  innerTextarea: {
    overflow: 'hidden',
    wordWrap: 'break-word',
    margin: 0,
    minHeight: '75px',
    padding: '9px 11px',
    paddingBottom: 0,
    width: '100%',
    resize: 'none',
    borderRadius: '5px',
    backgroundColor: '#edeff0',
    boxShadow: 'inset 0 1px 6px rgba(0,0,0,.1)',
    borderColor: 'rgba(0,0,0,.15)',
    outline: 'none',
    font: '14px Helvetica Neue, Arial, Helvetica, sans-serif',
  }
});

class PopupEditMenu extends Component {
  render() {
    const { classes, onPopupClose, popupOpen, task, username, ...list} = this.props;

    return (
      <Dialog
        open={popupOpen}
        onClose={onPopupClose}
      >
        <div className={classes.wrapInnerPopup}>

          <div className={classes.headerPopup}>
            <Typography variant="display1" className={classes.mainTitle}>
              <Web className={classes.customStyle} /> {task[0].toUpperCase() + task.slice(1)}
            </Typography>
            <Typography variant="subheading" gutterBottom>
              In the <u>{list.nameList}</u> list
            </Typography>
          </div>

          <div className={classes.contentPopup}>
            <Typography variant="title" className={classes.title}>
              <Description className={classes.customStyle} /> Description
            </Typography>
            <textarea className={classes.innerTextarea} placeholder="Add a more detailed description"></textarea>
          </div>

          <div className={classes.contentPopup}>
            <Typography variant="title" className={classes.title}>
              <Comment className={classes.customStyle} /> Adding a comment
            </Typography>
            <textarea className={classes.innerTextarea} placeholder="Add comment" ></textarea>
          </div>

          Creator: {username}

          <DialogActions>
            <Button onClick={onPopupClose} color="secondary">
              Save
            </Button>
            <Button onClick={onPopupClose} autoFocus>
              Close
            </Button>
          </DialogActions>

        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(PopupEditMenu);
