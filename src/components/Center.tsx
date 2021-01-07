import { Box, Button, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { autorun } from 'mobx';
import { Observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { config } from '../config';
import { StoreContext } from '../store';
import { SimpleAppBar } from './Login';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: theme.spacing(4),
        }
    })
);

export const Center = () => {
    const store = useContext(StoreContext);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => autorun(() => {
        if (store.isIsLoginReady && !store.isLogin) {
            history.replace('/login');
        }
    }), [store, history]);

    function logout() {
        fetch(`${config.apiHost}/api/user/logout`, {
            method: 'post',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            store.setIsLogin(false);
            store.setUserInfo({
                phone: '',
                nick: '',
                id: '',
            });
        });
    }

    return <Box>
        <SimpleAppBar />
        <Observer>
            {() => 
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12}>
                    昵称：{store.userInfo.nick}
                </Grid>
                <Grid item xs={12}>
                    电话：{store.userInfo.phone}
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="outlined" onClick={logout}>退出登录</Button>
                </Grid>
            </Grid>}
        </Observer>
    </Box>;
}
