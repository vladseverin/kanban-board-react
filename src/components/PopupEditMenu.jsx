import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class PopupEditMenu extends Component {
  render() {
    const { onPopupClose, popupOpen, task, username, ...list} = this.props;

    return (
      <Dialog
        open={popupOpen}
        onClose={onPopupClose}
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
          <Button onClick={onPopupClose} color="secondary">
            Save
            </Button>
          <Button onClick={onPopupClose} autoFocus>
            Close
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default PopupEditMenu;
