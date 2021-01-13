import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { config } from '../config';
import { useParams } from 'react-router-dom';

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
    const [book, setBook] = useState<Chapter | undefined>(undefined);

    useEffect(() => {
        fetch(`${config.apiHost}/api/chapter/${id}`, {
            method: 'get',
            mode: 'cors',
            credentials: 'include',
        })
        .then(data => data.json())
        .then(data => {
            setBook(new Chapter(data.chapter));
        });
    }, [id]);
  
    return <Box className={classes.container}>
        <Observer>
            {() => <ChapterBoxVer2 data={book} />}
        </Observer>
    </Box>;
}
