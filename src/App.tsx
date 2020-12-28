import classes from '*.module.css';
import { AppBar, Box, Container, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React, { useContext } from 'react';
import { ChapterBox } from './Chapter';
import { StoreContext } from './store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    container: {
      marginTop: theme.spacing(3),
    }
  })
);

function App() {
  const classes = useStyles();
  const store = useContext(StoreContext);

  return <Box>
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          my book
        </Typography>
      </Toolbar>
    </AppBar>
    <Container className={classes.container}>
      <Observer>
        {() => <ChapterBox data={store} />}
      </Observer>
    </Container>
  </Box>;
}

export default App;
