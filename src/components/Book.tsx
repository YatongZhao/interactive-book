import { AppBar, Box, Container, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { ChapterBox } from './Chapter';
import { config } from '../config';
import { useParams } from 'react-router-dom';
import { Book } from '../store/book';
import { HideOnScroll } from './HideOnScroll';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        fetch(`${config.apiHost}/api/chapter/${id}`, {
            method: 'get'
        })
        .then(data => data.json())
        .then(data => {
            setBook(new Book(data.chapter));
        });
    }, [id]);
  
    return <Box>
        <HideOnScroll>
            <AppBar position="sticky" color="default">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {book?.title}
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
