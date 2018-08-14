import React from 'react';
import TopBar from './components/TopBar';
import { MuiThemeProvider } from 'material-ui/styles';

export default class extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <TopBar />
      </MuiThemeProvider>
    );
  }
}
