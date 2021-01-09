import { AppBar, Box, Button, createStyles, Dialog, Grid, IconButton, LinearProgress, makeStyles, Slide, TextField, Theme, Toolbar, Typography, } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { ContentEditor } from './ContentEditor';

const useAddChapterDialogStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
          position: 'relative',
        },
        title: {
          marginLeft: theme.spacing(2),
          flex: 1,
        },
        container: {
            padding: theme.spacing(2),
        },
        progress: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 10000
        },
        contentHeader: {
            fontSize: theme.typography.body1.fontSize,
            color: theme.palette.grey[700],
        }
    })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddChapterDialog = ({
    open, handleClose, onSubmit, titleLabel, dialogTitle, contentPlaceHolder
}: {
    open: boolean;
    handleClose: () => void;
    onSubmit: (arg: {
        content: string[];
        title: string;
    }) => Promise<void>;
    titleLabel: string;
    dialogTitle: string;
    contentPlaceHolder: string;
}) => {
    const classes = useAddChapterDialogStyles();
    const [name, setName] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [contents, setContents] = useState<string[]>([]);
    const [isContentError, setIsContentError] = useState(false);
    const [contentErrorMsg, setContentErrorMsg] = useState('');
    const [pending, setPending] = useState(false);

    useEffect(() => {
        setIsNameError(false);
        setNameErrorMsg('');
    }, [name]);

    useEffect(() => {
        setIsContentError(false);
        setContentErrorMsg('');
    }, [contents]);

    function handleSubmit() {
        if (!name) {
            setIsNameError(true);
            setNameErrorMsg(`${titleLabel}不能为空`);
            return;
        }
        if (contents.length === 0) {
            setIsContentError(true);
            setContentErrorMsg('内容不能为空');
            return;
        }

        let content = '';
        content = contents.reduce((pre: string, current: string) => {
            return pre + current.trim();
        }, '');

        if (!content) {
            setIsContentError(true);
            setContentErrorMsg('内容不能为空');
            return;
        }

        setPending(true);
        onSubmit({ content: contents, title: name })
            .then(data => {
                setPending(false);
                handleClose();
            });
    }

    return <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="default">
            <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {dialogTitle}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
                提交
            </Button>
            </Toolbar>
        </AppBar>
        <Grid container spacing={4} className={classes.container}>
            <Grid item xs={12}>
                <TextField
                    autoFocus
                    value={name}
                    error={isNameError}
                    helperText={nameErrorMsg}
                    onChange={e => setName(e.target.value)}
                    label={titleLabel}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <ContentEditor value={contents} onChange={setContents} helpText={contentErrorMsg} error={isContentError} />
            </Grid>
        </Grid>
        <Slide in={pending} direction="down">
            <LinearProgress className={classes.progress} />
        </Slide>
    </Dialog>;
}
