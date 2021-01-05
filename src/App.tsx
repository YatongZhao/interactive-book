import classes from '*.module.css';
import { AppBar, Box, Container, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { ChapterBox } from './components/Chapter';
import { config } from './config';
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

  useEffect(() => {
    fetch(`${config.apiHost}/api/book`, {
      method: 'get'
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      store.initialize(data.books[0]);
    });
  }, [store]);

  return <Box>
    {/* <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          <Observer>
            {() => <>
              {store.initialized ? store.title : ''}
            </>}
          </Observer>
        </Typography>
      </Toolbar>
    </AppBar> */}
    <Container className={classes.container}>
      <Observer>
        {() => <>
          {store.initialized ?
            <ChapterBox data={store} /> :
            <Box>waiting...</Box>}
        </>}
      </Observer>
    </Container>
  </Box>;
}

export default App;
