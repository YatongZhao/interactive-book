import { Box, Button, ButtonBase, createStyles, IconButton, makeStyles, Slide, Theme, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Chapter } from '../store/chapter';
import { ChapterSelector } from './ChapterSelector';
import { config } from '../config';
import { useHistory } from 'react-router-dom';
import { autorun } from 'mobx';
import { useObserver } from 'mobx-react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { AddChapterDialog } from './AddChapterDialog';
import { StoreContext } from '../store';

const useChapterBoxStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleBox: {
            position: 'sticky',
            zIndex: 10,
            top: 0,
            backgroundColor: theme.palette.background.default,
            paddingBottom: theme.spacing(1),
            boxShadow: `0px -3px 3px 1px ${theme.palette.grey[200]}`,
        },
        title: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            borderBottom: `1px solid ${theme.palette.divider}`,
            paddingRight: theme.spacing(1),
        },
        titleMiddle: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: 0,
        },
        mainTitle: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        subTitle: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        titleCreateBtn: {
            height: '100%',
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
            marginBottom: theme.spacing(8),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            textIndent: theme.spacing(4),
            lineHeight: theme.spacing(.22),
        },
        selectorContainer: {
            paddingLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        bottomBar: {
            borderTop: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            position: 'sticky',
            bottom: 0,
            backgroundColor: theme.palette.background.default,
        },
        likeBtn: {
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
            display: 'flex',
            flexDirection: 'column',
            color: theme.palette.grey[600],
        },
        likeBtnBox: {
            display: 'flex',
            flexDirection: 'column',
        },
        liked: {
            color: theme.palette.secondary.main,
        },
        unliked: {
        },
        iconBtnNum: {
            lineHeight: 1,
            position: 'relative',
            top: '-2px',
        }
    })
);

export const ChapterBoxVer2 = ({ data, parent }: {
    data?: Chapter;
    parent?: Chapter;
}) => {
    const classes = useChapterBoxStyles({ liked: data?.liked });
    const [selectedSubChapter, setSelectedSubChapter] = useState<Chapter | undefined>(undefined);
    const history = useHistory();
    const [showSelector, setShowSelector] = useState(false);
    const store = useContext(StoreContext);
    const [openAddChapterDialog, setOpenAddChapterDialog] = useState(false);

    useEffect(() => autorun(() => {
        if (!data?.selectedSubId) return;
        if (data?.subMap[data?.selectedSubId]) {
            setSelectedSubChapter(data?.subMap[data?.selectedSubId]);
        } else {
            fetch(`${config.apiHost}/api/chapter/${data?.selectedSubId}`, {
                method: 'get',
                mode: 'cors',
                credentials: 'include',
            })
            .then(data => data.json())
            .then(({ chapter: chapterSource }) => {
                let chapter = new Chapter(chapterSource);
                setSelectedSubChapter(chapter);
                data?.addSubMap(chapter);
            });
        }
    }), [data]);

    function handleCreateChapterSubmit({ content, title }: {
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
                parentId: parent?.id,
            }),
        })
        .then(data => data.json())
        .then(res => {
            if (res.errCode === 1000) {
                history.push('/login');
                return;
            }
            parent?.addSub(res.chapter);
        });
    }

    const createChapter = useCallback(() => {
        if (store.isIsLoginReady && store.isLogin) {
            setOpenAddChapterDialog(true);
        } else {
            history.push('/login');
        }
    }, [store, history]);

    const handleLike = () => {
        if (!(store.isIsLoginReady && store.isLogin)) {
            history.push('/login');
            return;
        }
        fetch(`${config.apiHost}/api/chapter/${data?.liked ? 'unlike' : 'like'}?id=${data?.id}`, {
            method: 'post',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(_data => {
            data?.setLikeNum(data.liked ? data.likeNum - 1 : data.likeNum + 1);
            data?.setLiked(!data.liked);
        });
    }

    return useObserver(() => <>
        <Box>
            <Box className={classes.titleBox}>
                {data && <Box className={classes.title}>
                    <IconButton onClick={history.goBack}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Box className={classes.titleMiddle} onClick={() => setShowSelector(!showSelector)}>
                        <Typography className={classes.mainTitle} variant="subtitle1">
                            {data.title}
                        </Typography>
                        <Typography className={classes.subTitle} variant="caption">
                            {data.content[0]}
                        </Typography>
                    </Box>
                    <Button className={classes.titleCreateBtn} color="primary" onClick={createChapter}>写剧情</Button>
                    {store.isIsLoginReady && store.isLogin && <AddChapterDialog
                        open={openAddChapterDialog}
                        handleClose={() => setOpenAddChapterDialog(false)}
                        onSubmit={handleCreateChapterSubmit}
                        titleLabel="标题"
                        dialogTitle="添加剧情"
                        contentPlaceHolder="本章内容..."
                        />}
                </Box>}
                {parent && showSelector && <ChapterSelector
                    header="剧情分支选择："
                    onSubmit={handleCreateChapterSubmit}
                    data={parent} onSelect={(id: string) => {
                        setShowSelector(false);
                        parent && parent.setSelectedSubId(id);
                    }} selectId={parent.selectedSubId} />}
            </Box>
            {parent && !data && <ChapterSelector
                header="剧情分支选择："
                onSubmit={handleCreateChapterSubmit}
                data={parent} onSelect={(id: string) => {
                    parent && parent.setSelectedSubId(id);
                }} selectId={parent.selectedSubId} />}
            {data && <Box className={classes.content}>
                {data?.content.map((line: string, i) => <Box key={i}>{line}</Box>)}
            </Box>}
            {data && <Box className={classes.bottomBar}>
                <Box>
                    <IconButton className={classes.likeBtn} size="small" onClick={handleLike}>
                        <Box className={classes.likeBtnBox}>
                            <ThumbUpAltIcon className={data.liked ? classes.liked : classes.unliked} fontSize="small" />
                            <Typography className={classes.iconBtnNum} variant="caption">{data.likeNum}</Typography>
                        </Box>
                    </IconButton>
                </Box>
                <Box>
                    <Button onClick={() => parent?.setPreSelectedSubId()} disabled={!parent?.hasPreSubId}>上一个剧情</Button>
                    <Button onClick={() => parent?.setNextSelectedSubId()} disabled={!parent?.hasNextSubId}>下一个剧情</Button>
                </Box>
            </Box>}
        </Box>
        {(data || selectedSubChapter) && <ChapterBoxVer2 key={'' + selectedSubChapter?.id + data?.id} data={selectedSubChapter} parent={data} />}
    </>);
}
