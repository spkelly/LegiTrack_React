import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Results from './components/Results';
 // eslint-disable-next-line
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
 // eslint-disable-next-line
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'

let history = createHistory();
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  </Provider>
  ,document.getElementById('root')
);

registerServiceWorker();
