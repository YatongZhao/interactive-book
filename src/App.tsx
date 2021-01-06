import React from 'react';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import { Home } from './components/Home';
import { BookBox } from './components/Book';

const App = () => {
  return <Router>
    <Route path="/" exact={true}>
      <Home />
    </Route>
    <Route path="/book/:id">
      <BookBox />
    </Route>
  </Router>;
}

export default App;
