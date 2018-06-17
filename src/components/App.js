import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BoardPage from './BoardPage';
import { lists } from '../mock-data';

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
      </MuiThemeProvider>
    );
  }
}

export default App;
