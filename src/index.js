import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './pages/App/App'
import Serie from './pages/Serie'


ReactDOM.render(
  <Router>
    <Route exact path="/home" component={App} />
    <Route exact path="/series-and-movies/:id" component={Serie} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
