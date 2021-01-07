import { Box, Button, CircularProgress, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../store';
import { SimpleAppBar } from './Login';
import { config } from '../config';


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
  })
);

export const SignUp = () => {
    const history = useHistory();

    const [nick, setNick] = useState('');
    const [isNickError, setIsNickError] = useState(false);
    const [nickErrorMsg, setNickErrorMsg] = useState('');

    const [phone, setPhone] = useState('');
    const [isPhoneError, setIsPhoneError] = useState(false);
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('');

    const [password, setPassword] = useState('');
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

    const [passwordSec, setPasswordSec] = useState('');
    const [isPasswordSecError, setIsPasswordSecError] = useState(false);
    const [passwordSecErrorMsg, setPasswordSecErrorMsg] = useState('');

    const [isPending, setIsPending] = useState(false);
    const store = useContext(StoreContext);

    const classes = useStyles();

    useEffect(() => {
        setNickErrorMsg('');
        setIsNickError(false);
    }, [nick]);

    useEffect(() => {
        setPhoneErrorMsg('');
        setIsPhoneError(false);
    }, [phone]);

    useEffect(() => {
        setPasswordErrorMsg('');
        setIsPasswordError(false);
    }, [password]);

    useEffect(() => {
        setPasswordSecErrorMsg('');
        setIsPasswordSecError(false);
    }, [passwordSec]);

    function onSubmit() {
        if (!phone) {
            setPhoneErrorMsg('请输入手机号');
            setIsPhoneError(true);
            return;
        } else if (!config.phoneRegExp.test(phone)) {
            setPhoneErrorMsg('请输入正确手机号');
            setIsPhoneError(true);
            return;
        }

        if (!nick) {
            setNickErrorMsg('请输入昵称');
            setIsNickError(true);
            return;
        } else if (!config.nickRegExp.test(nick)) {
            setNickErrorMsg('昵称格式不符合要求(4-20个字符)');
            setIsNickError(true);
            return;
        }

        if (!password) {
            setPasswordErrorMsg('请设置密码');
            setIsPasswordError(true);
            return;
        } else if (!config.passwordRegExp.test(password)) {
            setPasswordErrorMsg('密码格式不正确(必须有数字和字母，6-20个字符)');
            setIsPasswordError(true);
            return;
        } else if (!passwordSec) {
            setPasswordSecErrorMsg('请输入二次确认密码');
            setIsPasswordSecError(true);
            return;
        } else if (password !== passwordSec) {
            setPasswordSecErrorMsg('两次输入密码不相同');
            setIsPasswordSecError(true);
            setIsPasswordError(true);
            return;
        }

        setIsPending(true);
        fetch(`${config.apiHost}/api/user/sign-up`, {
            method: 'post',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone, password, nick
            }),
        })
        .then(data => data.json())
        .then(data => {
            setIsPending(false);
            if (!data.errCode) {
                store.setIsLogin(true);
                store.setUserInfo(data.info);
                history.push('/');
                return;
            }

            if (data.errCode === 4) {
                setPhoneErrorMsg('该手机号已被注册');
                setIsPhoneError(true);
            } else if (data.errCode === 5) {
                setNickErrorMsg('该昵称已存在');
                setIsNickError(true);
            }
        });
    }

    return <Box>
        <SimpleAppBar />
        <Grid container className={classes.container} spacing={4}>
            <Grid item xs={12}>
                <TextField
                    autoFocus
                    error={isNickError}
                    helperText={nickErrorMsg}
                    value={nick}
                    onChange={e => setNick(e.target.value)}
                    label="昵称"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
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
            <Grid item xs={12}>
                <TextField
                    error={isPasswordSecError}
                    helperText={passwordSecErrorMsg}
                    value={passwordSec}
                    type="password"
                    onChange={e => setPasswordSec(e.target.value)}
                    label="确认密码"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} className={classes.submitBtnContainer}>
                <Button
                    disabled={isPending}
                    onClick={onSubmit}
                    className={classes.submitBtn} variant="outlined" color="primary" fullWidth>
                    注册
                </Button>
                {isPending && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Grid>
        </Grid>
    </Box>;
}
