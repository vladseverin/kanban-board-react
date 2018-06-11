import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import Create from '@material-ui/icons/Create';
import AddBox from '@material-ui/icons/AddBox';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  wrapList: {
    width: 270,
    height: '100%',
    backgroundColor: '#fafafa',
    padding: theme.spacing.unit,
    margin: `0px ${theme.spacing.unit}px 0px ${theme.spacing.unit}px`,
  },
  listHeader: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: theme.spacing.unit,
  },
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
  cardComposerTextarea: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
    color: '#bbbbbb',
    marginTop: theme.spacing.unit,
    '&:hover': {
      color: '#6ba1ce',
    }
  },
  hide: {
    display: 'none',
  },
  buttonHover: {
    '&:hover': {
      cursor: 'grab',
    },
    '&:active': {
      cursor: 'grabbing',
    }
  },
});

class List extends Component {
  state = {
    isOpen: false,
  };

  handleChangeCompooser = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { classes, title, task } = this.props;
    const { isOpen } = this.state;
    return (
      <Paper className={classes.wrapList} >
        <Typography className={classes.listHeader} variant="subheading" component="h3">
          {title}
          <IconButton className={classes.buttonHover}>
            <ViewHeadline />
          </IconButton>
        </Typography>

        <div className={classes.listCards}>
          <Paper className={classes.listCard}>
            <IconButton className={classes.editButton} variant='flat'>
              <Create style={{ fontSize: 15 }} />
            </IconButton>
            <Typography className={classes.listCardTitle} variant="body1" component="span">
              {task}
            </Typography >
          </Paper>

          <div className={classNames(classes.cardComposer, isOpen ? '' : classes.hide)}>
            <textarea className={classes.cardComposerTextarea}></textarea>
            <IconButton>
              <AddBox color="secondary" />
            </IconButton>
            <IconButton onClick={this.handleChangeCompooser}>
              <Close color="primary" />
            </IconButton>
          </div>
        </div>

        <a className={classNames(classes.openCardComposer, isOpen ? classes.hide : '')} href="javascript:void(0);"
          onClick={this.handleChangeCompooser}>
          Добавить карточку...
        </a>
      </Paper>
    );
  }
}

export default withStyles(styles)(List);
