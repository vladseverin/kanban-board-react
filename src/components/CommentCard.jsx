import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Close from "@material-ui/icons/Close";

const styles = theme => ({
  wrapComment: {
    width: "100%",
    borderRadius: 4,
    color: "#fff",
    backgroundColor: "#2d2d2d",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    marginBottom: theme.spacing.unit * 2,
    fontSize: "14px",
    display: "flex",
    flexFlow: "column",
    position: "relative",
    cursor: "pointer"
  },
  header: {
    fontSize: "0.7em",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #8c8c8c",
    paddingBottom: 4
  },
  comment: {
    paddingTop: 6,
    fontSize: "0.9em"
  },
  remove: {
    display: "block",
    position: "absolute",
    right: "2px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#2d2d2d",
    paddingTop: "5px",
    paddingRight: "4px",
    borderRadius: "0 50% 50% 0",
    cursor: "pointer",
    zIndex: -1,
    transition: "all 0.2s ease-out",
    opacity: 0
  },
  show: {
    right: "-19px",
    zIndex: 1,
    opacity: 1,
    "&:hover": {
      color: "#8c8c8c"
    }
  }
});

class CommentCard extends Component {
  state = {
    isOver: false
  };

  handleOnMouseOver = () => {
    this.setState({
      isOver: true
    });
  };

  handleOnMouseOut = () => {
    this.setState({
      isOver: !this.state.isOver
    });
  };

  handleOnRemoveComment = () => {
    const { removeComment, cardId, commentId, ...list } = this.props;

    removeComment(list._id, cardId, commentId);
  };

  render() {
    const { comment, sender, data, classes } = this.props;
    const { isOver } = this.state;

    return (
      <div
        className={classes.wrapComment}
        onMouseOver={this.handleOnMouseOver}
        onMouseOut={this.handleOnMouseOut}
      >
        <div className={classes.header}>
          <div className={classes.sender}>{sender}</div>
          <div className={classes.data}>{data}</div>
        </div>

        <div
          onMouseOver={this.handleOnMouseOver}
          className={classnames(classes.remove, isOver ? classes.show : null)}
        >
          <Close onClick={this.handleOnRemoveComment} />
        </div>

        <div className={classes.comment}>{comment}</div>
      </div>
    );
  }
}

export default withStyles(styles)(CommentCard);
