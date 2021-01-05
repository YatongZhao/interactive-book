import { Box, createStyles, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Radio, Theme } from '@material-ui/core';
import React from 'react';
import { Chapter } from '../store/chapter';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(2),
        },
    })
);

export const ChapterSelector = ({ data, onSelect, selectId }: {
    data: Chapter;
    selectId: String;
    onSelect: Function;
}) => {
    const classes = useStyles();

    return <Box className={classes.container}>
        <List
            subheader={
                <ListSubheader>
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
        </List>
    </Box>;
}
