import React from 'react';
import ErrorBoundary from '../ErrorBoundry';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  state = { open: false };

  renderArtists = artists => {
    return artists.map(artist => (
      <ListItem key={artist} button>
        <ListItemText primary={artist} />
      </ListItem>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.setState(({ open }) => ({ open: !open }))}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Eat The Rich
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={'left'}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <Divider />
          <List component="nav">{this.renderArtists(['Ghost'])}</List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);
