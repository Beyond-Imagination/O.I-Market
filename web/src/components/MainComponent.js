import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MenuComponent from './menubar/MenuComponent';
import Album from './Album';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

export default function MainComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuComponent />
      <Album />
    </div>
  );
}
