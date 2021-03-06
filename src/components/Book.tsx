import { AppBar, Box, Container, createStyles, Fade, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { ChapterBox } from './Chapter';
import { config } from '../config';
import { useHistory, useParams } from 'react-router-dom';
import { HideOnScroll } from './HideOnScroll';
import Skeleton from '@material-ui/lab/Skeleton';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Chapter } from '../store/chapter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    container: {
      marginTop: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
  })
);
export const BookBox = () => {
    const classes = useStyles();
    const { id } = useParams() as any;
    const [book, setBook] = useState<Chapter | null>(null);
    const history = useHistory();

    useEffect(() => {
        fetch(`${config.apiHost}/api/chapter/${id}`, {
            method: 'get'
        })
        .then(data => data.json())
        .then(data => {
            setBook(new Chapter(data.chapter));
        });
    }, [id]);
  
    return <Box>
        <HideOnScroll>
            <AppBar position="sticky" color="default">
                <Toolbar variant="dense">
                    <IconButton
                        onClick={() => history.goBack()}
                        edge="start" className={classes.menuButton} color="inherit">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {book ? <Fade in={!!book}><Box>{book.title}</Box></Fade>
                            : <Skeleton animation="wave" width={100} />}
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Container className={classes.container}>
            <Observer>
            {() => <>
                {book ?
                book.initialized ?
                    <ChapterBox data={book} /> :
                    <Box>error</Box> :
                <Box>waiting...</Box>}
            </>}
            </Observer>
        </Container>
    </Box>;
}
