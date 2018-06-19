import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import WeclomePage from '../containers/WelcomePage';
import BoardPage from '../containers/BoardPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BBDEFB',
      contrastText: '#212121',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/(welcome)?" component={WeclomePage} />
        <Route path="/board" component={BoardPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
