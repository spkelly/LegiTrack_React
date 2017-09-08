import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'


let history = createHistory();
ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={App} />
  </Router>
  ,document.getElementById('root')
);

registerServiceWorker();
