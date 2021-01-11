import { AppBar, Box, Container, createStyles, Fade, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { config } from '../config';
import { useHistory, useParams } from 'react-router-dom';
import { HideOnScroll } from './HideOnScroll';
import Skeleton from '@material-ui/lab/Skeleton';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Chapter } from '../store/chapter';
import { ChapterBoxVer2 } from './ChapterVer2';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    },
    container: {
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
  })
);
export const BookBoxVer2 = () => {
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
  
    return <Box className={classes.container}>
        <Observer>
            {() => <>
                {book ?
                book.initialized ?
                    <ChapterBoxVer2 data={book} /> :
                    <Box>error</Box> :
                <Box>waiting...</Box>}
            </>}
        </Observer>
    </Box>;
}
