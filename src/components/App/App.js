import React from 'react';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BBDEFB',
      contrastText: '#212121',
    },
  },
});

const drawerWidth = 240;

const styles = theme => ({
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    flexGrow: 1,
    backgroundColor: '#d9eeff',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentLeft: {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentShiftLeft: {
    marginLeft: 0,
  },

  wrapBoard: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexFlow: 'row wrap',
    
  },

  wrapList: {
    width: 270,
    height: '100%',
    backgroundColor: '#fafafa',
    padding: theme.spacing.unit,
    margin: `0px ${theme.spacing.unit}px 0px ${theme.spacing.unit}px`,
    marginTop: theme.spacing.unit * 3,
  },

  listHeader: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listCard: {
    flex: '1 1 auto',
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
  }
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes.appBarShiftLeft]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Kanban Board
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="persistent"
            anchor={anchor}
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />

          </Drawer>

          <main
            className={classNames(classes.content, classes.contentLeft, {
              [classes.contentShift]: open,
              [classes.contentShiftLeft]: open,
            })}
          >
            <div className={classes.wrapBoard}>

              <Paper className={classes.wrapList} >
                <Typography className={classes.listHeader} variant="subheding" component="h3">
                  Нужно сделать
                  <Button variant="raised" color="primary" size="small">
                    <AddIcon />
                  </Button>
                </Typography>
                <a className={classes.openCardComposer} href="javascript:void(0);">
                  Добавить карточку...
                </a>
        
              </Paper>

              <Paper className={classes.wrapList} >
                <Typography className={classes.listHeader} variant="subheding" component="h3">
                  В процессе
                  <Button variant="raised" color="primary" size="small">
                    <AddIcon />
                  </Button>
                </Typography>
                <a className={classes.openCardComposer} href="javascript:void(0);">
                  Добавить карточку...
                </a>
        
              </Paper>

              <Paper className={classes.wrapList} >
                <Typography className={classes.listHeader} variant="subheding" component="h3">
                  Готово
                  <Button variant="raised" color="primary" size="small">
                    <AddIcon />
                  </Button>
                </Typography>
                <a className={classes.openCardComposer} href="javascript:void(0);">
                  Добавить карточку...
                </a> 
              </Paper>

            </div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(PersistentDrawer);
