import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Web from '@material-ui/icons/Web';
import Description from '@material-ui/icons/Description';
import Comment from '@material-ui/icons/Comment';

import CommentCard from './CommentCard';

const styles = () => ({
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
    width: '100%',
    resize: 'none',
    borderRadius: '5px',
    background: 'rgba(0, 0, 0, .03)',
    borderColor: 'rgba(0,0,0,.15)',
    boxShadow: 'inset 0 1px 6px rgba(0,0,0,.1)',
    outline: 'none',
    font: '14px Helvetica Neue, Arial, Helvetica, sans-serif',
    paddingBottom: '9px',
  },
});

class PopupEditMenu extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    window.ref = this.myRef.current;
  }

  state = {
    description: {
      isDisabled: true,
      text: '',
    },
    message: {
      isDisabled: true,
      text: '',
    },
  };

  componentWillReceiveProps(nextState) {
    this.setState({
      description: {
        isDisabled: true,
        text: nextState.description,
      },
      message: {
        isDisabled: true,
        text: '',
      },
    });
  }

  handleChangeText = (e) => {
    e.preventDefault();
    const { isDisabled } = this.state;

    this.setState({
      [e.target.name]: {
        isDisabled,
        text: e.target.value,
      },
    });
  };

  handleEditDescription = () => {
    const { editDescription, cardId, ...list } = this.props;
    const { description } = this.state;

    editDescription(list._id, cardId, description.text);
  };

  handleSendComment = () => {
    const { addComment, cardId, ...list } = this.props;
    const { message } = this.state;

    addComment(list._id, cardId, message.text);
  };

  render() {
    const {
      classes,
      onPopupClose,
      popupOpen,
      task,
      username,
      comments,
      removeComment,
      cardId,
      ...list
    } = this.props;
    const { description, message } = this.state;

    return (
      <Dialog open={popupOpen} onClose={onPopupClose}>
        <div ref={this.myRef} className={classes.wrapInnerPopup}>
          <div className={classes.headerPopup}>
            <Typography variant="display1" className={classes.mainTitle}>
              <Web className={classes.customStyle} />
              {' '}
              {task && task[0].toUpperCase() + task.slice(1)}
            </Typography>
            <Typography variant="subheading" gutterBottom>
              In the
              {' '}
              <u>
                {list.nameList}
              </u>
              {' '}
list
            </Typography>
          </div>
          <div className={classes.contentPopup}>
            <Typography variant="title" className={classes.title}>
              <Description className={classes.customStyle} />
              {' '}
Description
            </Typography>
            <TextareaAutosize
              className={classes.innerTextarea}
              placeholder="Add a more detailed description"
              onChange={this.handleChangeText}
              name="description"
              value={description.text}
            />
            <Button
              onClick={this.handleEditDescription}
              disabled={description.isDisabled}
              color="primary"
              variant="contained"
            >
              Save
            </Button>
          </div>
          <div className={classes.contentPopup}>
            <Typography variant="title" className={classes.title}>
              <Comment className={classes.customStyle} />
              {' '}
Adding a comment
            </Typography>
            <TextareaAutosize
              className={classes.innerTextarea}
              placeholder="Add comment"
              onChange={this.handleChangeText}
              value={message.text}
              name="message"
            />
            <Button
              onClick={this.handleSendComment}
              disabled={message.isDisabled}
              color="primary"
              variant="contained"
            >
              Send
            </Button>
          </div>
          {comments.map(c => (
            <CommentCard
              key={c._id}
              commentId={c._id}
              comment={c.comment}
              sender={c.sender}
              data={c.date}
              removeComment={removeComment}
              cardId={cardId}
              {...c}
              {...list}
            />
          ))}
          Creator:
          {' '}
          {username}
          <DialogActions>
            <Button onClick={onPopupClose} color="secondary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(PopupEditMenu);
