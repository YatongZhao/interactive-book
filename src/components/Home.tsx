import { AppBar, Box, createStyles, List, ListItem, ListItemText, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { config } from '../config';

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

    useEffect(() => {
        fetch(`${config.apiHost}/api/book`, { method: 'get' })
            .then(data => data.json())
            .then(data => {
                console.log(data.books);
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
