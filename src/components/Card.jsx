import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Create from '@material-ui/icons/Create';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
});

class Card extends Component {
  render() {
    const { classes, task } = this.props;
    return (
      <div className={classes.listCards}>
        <Paper className={classes.listCard}>
          <IconButton className={classes.editButton} variant='flat'>
            <Create style={{ fontSize: 15 }} />
          </IconButton>
          <Typography className={classes.listCardTitle} variant="body1" component="span">
            {task}
          </Typography >
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
