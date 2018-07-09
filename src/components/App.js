import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WeclomePage from "../containers/WelcomePage";
import BoardPage from "../containers/BoardPage";

import history from "../utils/history";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2d2d2d",
      contrastText: "#fff"
    },
    secondary: {
      main: "#2d2d2d",
      contrastText: "#fff"
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route exact path="/(welcome)?" component={WeclomePage} />
        <Route path="/board" component={BoardPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
