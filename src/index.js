import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Results from './components/Results';
 // eslint-disable-next-line
import {Router, Route, IndexRoute} from 'react-router';
 // eslint-disable-next-line
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'


let history = createHistory();
ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/results" component={Results} />
    </div>
  </Router>
  ,document.getElementById('root')
);

registerServiceWorker();
