import { Box, createStyles, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Radio, Theme } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React from 'react';
import { Chapter } from '../store/chapter';
import { AddChapter } from './Chapter';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(2),
            backgroundColor: theme.palette.grey[300],
        },
        addChapterBox: {
            padding: theme.spacing(4),
        }
    })
);

export const ChapterSelector = ({ data, onSelect, selectId, onSubmit, header }: {
    data: Chapter;
    selectId: String;
    onSelect: Function;
    onSubmit: (arg: {
        content: string;
        title: string;
    }) => Promise<void>;
    header: string;
}) => {
    const classes = useStyles();

    return <Box className={classes.container}>
        {data.sub.length !== 0 && <Observer>
            {() => <List
                subheader={
                    <ListSubheader disableSticky={true}>
                        {header}
                    </ListSubheader>
                }
            >
                {data.sub.map(item => <ListItem button key={item.id} onClick={() => onSelect(item.id)}>
                    <ListItemIcon>
                        <Radio checked={item.id === selectId}/>
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItem>)}
            </List>}
        </Observer>}
        <Box className={classes.addChapterBox}>
            <AddChapter onSubmit={onSubmit}/>
        </Box>
    </Box>;
}
