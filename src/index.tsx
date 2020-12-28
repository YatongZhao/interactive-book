import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { autorun } from 'mobx';
import { StoreProvider } from './store';
import { CssBaseline } from '@material-ui/core';
import { Book } from './store/book';

const source = window.localStorage.getItem('interactive-book-store');
const data = new Book(JSON.parse(source as any) || {
  title: 'First Book Of Universe',
  author: 'me',
  content: 'Boommmmmm',
  sub: []
});

autorun(() => {
  localStorage.setItem('interactive-book-store', JSON.stringify(data));
});

ReactDOM.render(
  <StoreProvider value={data}>
    <CssBaseline />
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
