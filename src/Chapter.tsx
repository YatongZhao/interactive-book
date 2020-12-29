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
        fetch(`http://localhost:3000/api/add-chapter?id=${data.id}`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, author, content
            }),
        })
        .then(data => data.json())
        .then(res => {
            data.addSub({
                title, author, content,
                id: res.id
            });
            setOpen(false);
        })
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

export const ChapterBox = ({ data }: {
    data: Chapter;
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
        if (!selectedSubChapterId) return;
        if (data.subMap[selectedSubChapterId]) {
            setSelectedSubChapter(data.subMap[selectedSubChapterId]);
        } else {
            fetch(`http://localhost:3000/api/chapter?id=${selectedSubChapterId}`, {
                method: 'get'
            })
            .then(data => data.json())
            .then(res => {
                let chapter = new Chapter(res);
                setSelectedSubChapter(chapter);
                data.addSubMap(chapter);
            });
        }
    }, [selectedSubChapterId, data]);

    return <>
        <Box className={classes.content}>{data.content}</Box>
        {selectedSubChapter && <>
            <ButtonBase className={classes.title} onClick={() => setShowSelector(!showSelector)}>
                {selectedSubChapter.title}
                <Box className={classes.author} component="span">author: {selectedSubChapter.author}</Box>
            </ButtonBase>
        </>}
        <Observer>
            {() => <>
                {(!selectedSubChapterId || showSelector) && <Box className={classes.selectorContainer}>
                    {data.sub.length !== 0 && <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">选择一条分支</FormLabel>
                        <RadioGroup value={selectedSubChapterId} onChange={handleChange}>
                            {data.sub.map(item => <FormControlLabel
                                key={item.id} value={item.id} control={<Radio size="small"/>} label={item.title}/>)}
                        </RadioGroup>
                    </FormControl>}
                    <AddChapter data={data} />
                </Box>}
            </>}
        </Observer>
        {selectedSubChapter &&
            <ChapterBox key={selectedSubChapter.id} data={selectedSubChapter} />
        }
    </>;
}