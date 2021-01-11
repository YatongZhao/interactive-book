import { Box, ButtonBase, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Chapter } from '../store/chapter';
import { Observer } from 'mobx-react';
import { ChapterSelector } from './ChapterSelector';
import { config } from '../config';
import { useHistory } from 'react-router-dom';

const useChapterBoxStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginTop: theme.spacing(8),
            width: '100%',
            alignItems: 'flex-start',
            flexDirection: 'column',
        },
        author: {
            fontWeight: 400,
            color: theme.palette.grey[400],
            fontSize: theme.spacing(2),
            textAlign: 'right',
            width: '100%',
            marginTop: theme.spacing(1),
        },
        content: {
            marginTop: theme.spacing(6),
            textIndent: theme.spacing(4),
            lineHeight: theme.spacing(.22),
        },
        selectorContainer: {
            paddingLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        }
    })
);

export const ChapterBox = ({ data, parent, setParentId }: {
    data: Chapter;
    parent?: Chapter;
    setParentId?: Function;
}) => {
    const classes = useChapterBoxStyles();
    const [selectedSubChapterId, setSelectedSubChapterId] = useState('');
    const [selectedSubChapter, setSelectedSubChapter] = useState<Chapter | null>(null);
    const [showSelector, setShowSelector] = useState(false);
    const history = useHistory();

    const handleSelect = (id: string) => {
        setParentId && setParentId(id);
    }

    const handleChange = (id: string) => {
        setSelectedSubChapterId(id);
        setShowSelector(false);
    }

    function handleCreateChapterSubmit(parent: Chapter) {

        return function ({ content, title }: {
            content: string[]; title: string;
        }) {
            return fetch(`${config.apiHost}/api/chapter`, {
                method: 'post',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title, content,
                    parentId: parent.id,
                }),
            })
            .then(data => data.json())
            .then(res => {
                if (res.errCode === 1000) {
                    history.push('/login');
                    return;
                }
                parent.addSub(res.chapter);
            });
        }
    }

    useEffect(() => {
        if (data.sub.length === 0) return;
        setSelectedSubChapterId(data.sub[0].id);
    }, [data]);

    useEffect(() => {
        if (!selectedSubChapterId) return;
        if (data.subMap[selectedSubChapterId]) {
            setSelectedSubChapter(data.subMap[selectedSubChapterId]);
        } else {
            fetch(`${config.apiHost}/api/chapter/${selectedSubChapterId}`, {
                method: 'get'
            })
            .then(data => data.json())
            .then(({ chapter: chapterSource }) => {
                let chapter = new Chapter(chapterSource);
                setSelectedSubChapter(chapter);
                data.addSubMap(chapter);
            });
        }
    }, [selectedSubChapterId, data]);

    return <>
        <Box className={classes.content}>
            {data.content.map((line: string) => <Box>{line}</Box>)}
        </Box>
        {parent && <ChapterSelector
            header="觉得本章看的不过瘾？看看其他同样优秀的版本吧："
            onSubmit={handleCreateChapterSubmit(parent)}
            data={parent} onSelect={handleSelect} selectId={data.id} />}
        {selectedSubChapter && <>
            <ButtonBase className={classes.title} onClick={() => setShowSelector(!showSelector)}>
                <Typography variant="h4">
                    {selectedSubChapter.title}
                </Typography>
                <Box className={classes.author}>author: {selectedSubChapter.author}</Box>
            </ButtonBase>
        </>}
        
        <Observer>
            {() => <>
                {(!selectedSubChapterId || showSelector) && <ChapterSelector
                    header="本章其他分支："
                    onSubmit={handleCreateChapterSubmit(data)}
                    data={data} onSelect={handleChange} selectId={selectedSubChapterId} />}
            </>}
        </Observer>
        <Observer>
            {() => <>
                {selectedSubChapter &&
                    <ChapterBox
                        key={selectedSubChapter.id}
                        data={selectedSubChapter}
                        parent={data}
                        setParentId={setSelectedSubChapterId} />
                }
            </>}
        </Observer>
    </>;
}