import { AppBar, Box, Button, Theme, Grid, IconButton, makeStyles, TextField, Toolbar, createStyles, Typography, Link } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { config } from '../config';
import { StoreContext } from '../store';

export const SimpleAppBar = () => {
    const history = useHistory();

    return <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar variant="dense">
            <IconButton
                onClick={() => history.goBack()}
                edge="start" color="inherit">
                <ArrowBackIosIcon />
            </IconButton>
        </Toolbar>
    </AppBar>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        margin: `${theme.spacing(4)}px auto`,
        maxWidth: theme.spacing(40),
    },
    submitBtnContainer: {
        position: 'relative',
    },
    submitBtn: {
        marginTop: theme.spacing(1),
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -10,
        marginLeft: -12,
    },
    signInBox: {
        display: 'flex',
        justifyContent: 'center',
    },
  })
);

export const Login = () => {
    const history = useHistory();
    const [phone, setPhone] = useState('');
    const [isPhoneError, setIsPhoneError] = useState(false);
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

    const [isPending, setIsPending] = useState(false);
    const store = useContext(StoreContext);

    const classes = useStyles();

    useEffect(() => {
        setPhoneErrorMsg('');
        setIsPhoneError(false);
    }, [phone]);

    useEffect(() => {
        setPasswordErrorMsg('');
        setIsPasswordError(false);
    }, [password]);

    function onSubmit() {
        if (isPhoneError) return;
        if (isPasswordError) return;

        if (!phone) {
            setPhoneErrorMsg('请输入手机号');
            setIsPhoneError(true);
            return;
        } else if (!config.phoneRegExp.test(phone)) {
            setPhoneErrorMsg('请输入正确手机号');
            setIsPhoneError(true);
            return;
        }

        setIsPending(true);
        fetch(`${config.apiHost}/api/user/sign-in`, {
            method: 'post',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone, password
            }),
        })
        .then(data => data.json())
        .then(data => {
            setIsPending(false);
            if (!data.errCode) {
                history.goBack();
                store.setIsLogin(true);
                store.setUserInfo(data.info);
                return;
            }
            if (data.errCode === 1) {
                setPhoneErrorMsg(data.errMsg);
                setIsPhoneError(true);
            } else if (data.errCode === 2) {
                setPasswordErrorMsg(data.errMsg);
                setIsPasswordError(true);
            }
        });
    }

    return <Box>
        <SimpleAppBar />
        <Grid container className={classes.container} spacing={4}>
            <Grid item xs={12}>
                <TextField
                    autoFocus
                    error={isPhoneError}
                    helperText={phoneErrorMsg}
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    label="手机"
                    type="number"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={isPasswordError}
                    helperText={passwordErrorMsg}
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    label="密码"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} className={classes.submitBtnContainer}>
                <Button
                    disabled={isPending}
                    onClick={onSubmit}
                    className={classes.submitBtn} variant="outlined" color="primary" fullWidth>
                    登录
                </Button>
                {isPending && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Grid>
            <Grid item xs={12} className={classes.signInBox}>
                <Typography variant="caption">
                    还没有账号，立即前往<Link component={RouterLink} to="/sign-up">注册</Link>
                </Typography>
            </Grid>
        </Grid>
    </Box>;
}
