import { AppBar, Box, Button, createStyles, Dialog, Fab, Fade, Grid, IconButton, Link, LinearProgress, List, ListItem, ListItemText, makeStyles, Slide, TextField, Theme, Toolbar, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { config } from '../config';
import { StoreContext } from '../store';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions/transition';

const useAddChapterDialogStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
          position: 'relative',
        },
        title: {
          marginLeft: theme.spacing(2),
          flex: 1,
        },
        container: {
            padding: theme.spacing(2),
        },
        progress: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 10000
        }
    })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddChapterDialog = ({
    open, handleClose, onSubmit, titleLabel, dialogTitle, contentPlaceHolder
}: {
    open: boolean;
    handleClose: () => void;
    onSubmit: (arg: {
        content: string;
        title: string;
    }) => Promise<void>;
    titleLabel: string;
    dialogTitle: string;
    contentPlaceHolder: string;
}) => {
    const classes = useAddChapterDialogStyles();
    const [name, setName] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [content, setContent] = useState('');
    const [isContentError, setIsContentError] = useState(false);
    const [contentErrorMsg, setContentErrorMsg] = useState('');
    const [pending, setPending] = useState(false);

    useEffect(() => {
        setIsNameError(false);
        setNameErrorMsg('');
    }, [name]);

    useEffect(() => {
        setIsContentError(false);
        setContentErrorMsg('');
    }, [content]);

    function handleSubmit() {
        if (!name) {
            setIsNameError(true);
            setNameErrorMsg(`${titleLabel}不能为空`);
            return;
        }
        if (!content) {
            setIsContentError(true);
            setContentErrorMsg('内容不能为空');
            return;
        }

        setPending(true);
        onSubmit({ content, title: name })
            .then(data => {
                setPending(false);
                handleClose();
            });
    }

    return <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="default">
            <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {dialogTitle}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
                提交
            </Button>
            </Toolbar>
        </AppBar>
        <Grid container spacing={4} className={classes.container}>
            <Grid item xs={12}>
                <TextField
                    autoFocus
                    value={name}
                    error={isNameError}
                    helperText={nameErrorMsg}
                    onChange={e => setName(e.target.value)}
                    label={titleLabel}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="内容"
                    value={content}
                    error={isContentError}
                    helperText={contentErrorMsg}
                    onChange={e => setContent(e.target.value)}
                    fullWidth
                    multiline
                    placeholder={contentPlaceHolder}
                />
            </Grid>
        </Grid>
        <Slide in={pending} direction="down">
            <LinearProgress className={classes.progress} />
        </Slide>
    </Dialog>;
}

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
        history.push(`/book/${id}`);
    }

    function handleCreateBookSubmit({ content, title }: {
        content: string; title: string;
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
                    <ListItemText primary={book.title} secondary={book.content}/>
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
