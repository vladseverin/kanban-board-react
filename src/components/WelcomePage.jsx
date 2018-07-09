import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "relative",
    height: "100%"
  },
  title: {
    flex: 1,
    textAlign: "center"
  },
  wrapPaper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing.unit * 3,
    minWidth: "280px"
  },
  authentication: {
    marginBottom: 20
  },
  wrapperForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column"
  },
  button: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "105px"
  }
});

class WelcomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired
  };

  state = {
    username: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;

    this.props.login(username);
    localStorage.setItem("KANABAN_TOKEN", username);

    this.setState({
      username: ""
    });
  };

  render() {
    const { classes, isAuthenticated } = this.props;
    const { username } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/board" />;
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              Welcom to Kanban Board
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.wrapPaper} elevation={4}>
          <Typography variant="title" color="inherit" className={classes.title}>
            <form className={classes.wrapperForm} onSubmit={this.handleSubmit}>
              <TextField
                required
                label="Enter your username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleInputChange}
                margin="normal"
                className={classes.authentication}
              />
              <Button
                className={classes.button}
                variant="raised"
                type="submit"
                color="primary"
              >
                Login <Send className={classes.iconSend} />
              </Button>
            </form>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage);
