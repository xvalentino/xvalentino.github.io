import React from 'react';
import TopBar from './components/TopBar';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import ErrorBoundary from './components/ErrorBoundry';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Granola from './components/Granola';
import Ghost from './components/Ghost';
import Candid from './components/Candid';
import Anon from './components/Anon';

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
        <BrowserRouter>
          <MuiThemeProvider theme={createMuiTheme(theme)}>
            <TopBar />
            <Route exact path="/" component={Home} />{' '}
            <Route path="/ghost" component={Ghost} />
            <Route path="/granola" component={Granola} />
            <Route path="/candid" component={Candid} />
            <Route path="/anon" component={Anon} />
          </MuiThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
