import { AppBar, Box, Button, ButtonBase, Container, createStyles, Fade, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    line: {
        textIndent: theme.spacing(4),
    },
    nextChapterBox: {
        marginTop: theme.spacing(2),
    },
    nextChapterBtn: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
    }
  })
);
export const NewBookBox = () => {
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
                        onClick={() => history.push('/')}
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
            <Button fullWidth>
                加载上一篇
            </Button>
            <Box>
                {book?.content.map(line => <Box className={classes.line}>
                    <Typography variant="body1">{line}</Typography>
                </Box>)}
            </Box>
            <Box className={classes.nextChapterBox}>
                <Box>下一个剧情节点：</Box>
                {book?.sub.map(sub => <ButtonBase className={classes.nextChapterBtn} onClick={() => {
                    history.push(`/book-new/${sub.id}`);
                }}>
                    <Box>{sub.title}</Box>
                </ButtonBase>)}
            </Box>
            <Button fullWidth>
                加载下一篇
            </Button>
        </Container>
    </Box>;
}
