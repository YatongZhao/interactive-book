import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import { Home } from './components/Home';
import { BookBox } from './components/Book';
import { NewBookBox } from './components/NewBook';
import { Login } from './components/Login';
import { StoreContext } from './store';
import { config } from './config';
import { SignUp } from './components/SignUP';
import { Center } from './components/Center';
import { BookBoxVer2 } from './components/BookVer2';

const App = () => {
  const store = useContext(StoreContext);

  useEffect(() => {
    fetch(`${config.apiHost}/api/user/info`, {
      method: 'get',
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if (data.errCode === 1000) {
        store.setIsLogin(false);
      } else {
        store.setIsLogin(true);
        store.setUserInfo(data.info);
      }
    });
  }, [store]);

  return <Router>
    <Route path="/" exact={true}>
      <Home />
    </Route>
    <Route path="/book/:id">
      <BookBox />
    </Route>
    <Route path="/book-ver2/:id">
      <BookBoxVer2 />
    </Route>
    <Route path="/book-new/:id">
      <NewBookBox />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/sign-up">
      <SignUp />
    </Route>
    <Route path="/center">
      <Center />
    </Route>
  </Router>;
}

export default App;
