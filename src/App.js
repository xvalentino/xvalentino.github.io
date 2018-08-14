import React from 'react';
import TopBar from './components/TopBar';
import { CssBaseline, MuiThemeProvider } from 'material-ui';
import { createMuiTheme } from '@material-ui/core/styles';
import ErrorBoundary from './components/ErrorBoundry';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c5cae9',
    },
    secondary: {
      main: '#f1f8e9',
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <TopBar />
        </MuiThemeProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
