import { AppBar, Box, Button, createStyles, Fade, List, ListItem, ListItemText, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { config } from '../config';
import { StoreContext } from '../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
  })
);

export const Home = () => {
    const classes = useStyles();
    const [bookList, setBookList] = useState([]);
    const history = useHistory();
    const store = useContext(StoreContext);

    useEffect(() => {

        fetch(`${config.apiHost}/api/book`, { method: 'get' })
            .then(data => data.json())
            .then(data => {
                setBookList(data.books);
            });
    }, []);

    function handleClickBook(id: string) {
        history.push(`/book/${id}`);
    }

    return <Box>
        <AppBar position="sticky" color="primary">
            <Toolbar variant="dense">
                <Typography variant="h6" className={classes.title}>
                    ZBOOK
                </Typography>
                <Observer>
                    {() => <>
                        {store.isIsLoginReady ? <>
                            {store.isLogin ?
                                <Fade in={store.isLogin}>
                                    <Box>{store.userInfo.nick}</Box>
                                </Fade> :
                                <Fade in={!store.isLogin}>
                                    <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
                                </Fade>}
                        </> : <Skeleton animation="wave" width={60} />}
                    </>}
                </Observer>
            </Toolbar>
        </AppBar>
        <List>
            {bookList.map((book: any) =>
                <ListItem button key={book.id} onClick={() => handleClickBook(book.id)}>
                    <ListItemText primary={book.title} />
                </ListItem>)}
        </List>
    </Box>;
}
