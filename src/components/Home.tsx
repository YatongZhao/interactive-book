import { AppBar, Box, Button, createStyles, Fab, Fade, Link, List, ListItem, ListItemText, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { config } from '../config';
import { StoreContext } from '../store';

import AddIcon from '@material-ui/icons/Add';
import { AddChapterDialog } from './AddChapterDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    loginTips: {
        textAlign: 'center',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        color: theme.palette.grey[400],
    }
  })
);

export const Home = () => {
    const classes = useStyles();
    const [bookList, setBookList] = useState<{
        title: string;
        author: string;
        id: string;
        content: string;
        sub: any[];
    }[]>([]);
    const history = useHistory();
    const store = useContext(StoreContext);

    const [openAddDialog, setOpenAddDialog] = useState(false);

    useEffect(() => {

        fetch(`${config.apiHost}/api/book`, { method: 'get' })
            .then(data => data.json())
            .then(data => {
                setBookList(data.books);
            });
    }, []);

    function handleClickBook(id: string) {
        history.push(`/book-ver2/${id}`);
    }

    function handleCreateBookSubmit({ content, title }: {
        content: string[]; title: string;
    }) {
        return fetch(`${config.apiHost}/api/book`, {
            method: 'post',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
            }),
        })
        .then(data => data.json())
        .then(data => {

            if (data.errCode === 1000) {
                history.push('/login');
                return;
            }

            handleCreateBook(data.book);
        });
    }

    function handleCreateBook(book: {
        title: string;
        author: string;
        id: string;
        content: string;
        sub: any[];
    }) {
        setBookList([...bookList, book]);
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
                                    <Button color="inherit" onClick={() => history.push('/center')}>{store.userInfo.nick}</Button>
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
                    <ListItemText primary={book.title} secondary={book.content[0]}/>
                    <Box>{book.author}</Box>
                </ListItem>)}
        </List>
        <Observer>
            {() => <>
                {!store.isLogin && bookList.length > 0 && <Box className={classes.loginTips}>
                    <Typography variant="caption">
                        快去<Link component={RouterLink} to="/login">登录</Link>开始自己的创作吧～
                    </Typography>
                </Box>}
                {store.isLogin && <Fab className={classes.fab} color="primary" onClick={() => setOpenAddDialog(true)}>
                    <AddIcon />
                </Fab>}
            </>}
        </Observer>
        <AddChapterDialog
            open={openAddDialog}
            dialogTitle="创建图书"
            contentPlaceHolder="本书前言部分内容"
            titleLabel="书名"
            handleClose={() => setOpenAddDialog(false)}
            onSubmit={handleCreateBookSubmit} />
    </Box>;
}
