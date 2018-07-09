import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ViewHeadline from "@material-ui/icons/ViewHeadline";

const styles = theme => ({
  wrapHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listHeader: {
    flex: "1 0 auto",
    fontWeight: "bold",
    cursor: "pointer"
  },
  buttonTransfer: {
    width: "30px",
    height: "30px",
    "&:hover": {
      cursor: "grab"
    },
    "&:active": {
      cursor: "grabbing"
    }
  },
  changeTitle: {
    padding: "4px 0px 3px 3px",
    borderRadius: "2px",
    border: "1px solid gray",
    width: "100%",
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
});

class CardListHeader extends Component {
  state = {
    editTitle: this.props.title,
    isEdit: false
  };

  handleEditTitle = e => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({ editTitle: value });
  };

  handleBlur = () => {
    const { title, editListTitle, ...list } = this.props;
    const { editTitle } = this.state;

    if (title !== editTitle) {
      editListTitle(list._id, editTitle);
    }

    this.setState({ isEdit: false });
  };

  handleClickOnTitle = e => {
    this.setState({ isEdit: true });
  };

  handlePressEnter = e => {
    const { title, editListTitle, ...list } = this.props;
    const { editTitle } = this.state;

    if (e.key === "Enter") {
      if (title !== editTitle) {
        editListTitle(list._id, editTitle);
      }
      this.setState({ isEdit: false });
    }
  };

  render() {
    const { classes, title } = this.props;
    const { editTitle, isEdit } = this.state;

    const isEditTitle = (
      <input
        type="text"
        value={editTitle}
        className={classes.changeTitle}
        onChange={this.handleEditTitle}
        ref={input => input && input.focus()}
        onBlur={this.handleBlur}
        onKeyPress={this.handlePressEnter}
      />
    );

    return (
      <div className={classes.wrapHeader}>
        <Typography
          className={classes.listHeader}
          variant="subheading"
          component="h3"
          onClick={this.handleClickOnTitle}
        >
          {isEdit ? isEditTitle : title}
        </Typography>
        <IconButton className={classes.buttonTransfer}>
          <ViewHeadline />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(CardListHeader);
