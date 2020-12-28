import { Box, Button, ButtonBase, createStyles, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Chapter } from './store/chapter';
import { Observer } from 'mobx-react';

const AddChapter = ({ data }: {
    data: Chapter
}) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleClose = () => setOpen(false);

    const handleSubscribe = () => {
        data.addSub({
            title, author, content
        });
        setOpen(false);
    }

    return <>
        <Button variant="contained" color="default" disableElevation size="small" onClick={() => setOpen(true)}>在当前位置添加一个章节</Button>
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>添加一个章节</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    在当前位置，添加一个章节选择
                </DialogContentText>
                <TextField
                    autoFocus
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    label="标题"
                    fullWidth
                />
                <TextField
                    autoFocus
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    label="作者"
                    fullWidth
                />
                <TextField
                    autoFocus
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    label="内容"
                    fullWidth
                    multiline
                    rowsMax={10}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubscribe} color="primary">
                    确定
                </Button>
                <Button onClick={handleClose} color="primary">
                    取消
                </Button>
            </DialogActions>
        </Dialog>
    </>;
}

const useChapterBoxStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontWeight: 700,
            marginBottom: theme.spacing(0.5),
            padding: theme.spacing(1),
            width: '100%',
            textAlign: 'left',
            justifyContent: 'flex-start',
        },
        author: {
            fontWeight: 400,
            marginLeft: theme.spacing(1),
            color: theme.palette.grey[400],
        },
        content: {
            paddingLeft: theme.spacing(3),
            marginBottom: theme.spacing(1.5),
        },
        selectorContainer: {
            paddingLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        }
    })
);

export const ChapterBox = ({ data, onClickTitle }: {
    data: Chapter;
    onClickTitle?: Function;
}) => {
    const classes = useChapterBoxStyles();
    const [selectedSubChapterId, setSelectedSubChapterId] = useState('');
    const [selectedSubChapter, setSelectedSubChapter] = useState<Chapter | null>(null);
    const [showSelector, setShowSelector] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSubChapterId(e.target.value);
        setShowSelector(false);
    }

    useEffect(() => {
        setSelectedSubChapter(data.sub.find(item => item.id === selectedSubChapterId) || null);
    }, [selectedSubChapterId, data]);

    return <>
        <ButtonBase className={classes.title} onClick={() => onClickTitle && onClickTitle()}>
            {data.title}
            <Box className={classes.author} component="span">author: {data.author}</Box>
        </ButtonBase>
        <Box className={classes.content}>{data.content}</Box>
        <Box className={classes.selectorContainer}>
            {(!selectedSubChapterId || showSelector) && <>
                {data.sub.length !== 0 && <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">选择一条分支</FormLabel>
                    <RadioGroup value={selectedSubChapterId} onChange={handleChange}>
                        <Observer>
                            {() => <>
                                {data.sub.map(item => <FormControlLabel
                                    key={item.id} value={item.id} control={<Radio size="small"/>} label={item.title}/>)}
                            </>}
                        </Observer>
                    </RadioGroup>
                </FormControl>}
                <AddChapter data={data} />
            </>}
        </Box>
        {selectedSubChapter &&
            <ChapterBox key={selectedSubChapter.id} data={selectedSubChapter}
            onClickTitle={() => setShowSelector(!showSelector)} />}
    </>;
}