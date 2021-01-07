import { Box, createStyles, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Radio, Theme } from '@material-ui/core';
import { Observer } from 'mobx-react';
import React from 'react';
import { Chapter } from '../store/chapter';
import { AddChapter } from './Chapter';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(2),
        },
        addChapterBox: {
            marginLeft: theme.spacing(4),
        }
    })
);

export const ChapterSelector = ({ data, onSelect, selectId, onSubmit }: {
    data: Chapter;
    selectId: String;
    onSelect: Function;
    onSubmit: (arg: {
        content: string;
        title: string;
    }) => Promise<void>;
}) => {
    const classes = useStyles();

    return <Box className={classes.container}>
        <Observer>
            {() => <List
                subheader={
                    <ListSubheader disableSticky={true}>
                        觉得本章看的不过瘾？看看其他同样优秀的版本吧：
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
        </Observer>
        <Box className={classes.addChapterBox}>
            <AddChapter onSubmit={onSubmit}/>
        </Box>
    </Box>;
}
