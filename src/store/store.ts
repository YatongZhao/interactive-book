import { action, makeObservable, observable } from 'mobx';

export class Store {
    public isLogin = false;
    public isIsLoginReady = false;
    public userInfo = {
        phone: '',
        nick: '',
        id: '',
    }

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            isIsLoginReady: observable,
            setIsLogin: action,
            setUserInfo: action,
        });
    }

    setIsLogin(bool: boolean) {
        this.isLogin = bool;
        this.isIsLoginReady = true;
    }

    setUserInfo(info: {
        phone: string;
        nick: string;
        id: string;
    }) {
        this.userInfo = info;
    }
};
