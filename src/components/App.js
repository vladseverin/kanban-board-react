import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lists } from '../mock-data';
import BoardPage from './BoardPage';
import WeclomePage from './WelcomePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BBDEFB',
      contrastText: '#212121',
    },
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BoardPage data={lists}/>
        {/* <WeclomePage /> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
