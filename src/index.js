import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import TwitterHistory from './components/TwitterHistory'
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import MovieHistory from './components/MovieHistory';
import Notfound from './components/NotFound';
import reducers from './reducers';

// Routing
// const routing = (
    
//   )
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/twitter" component={TwitterHistory} />
        <Route path="/movies" component={MovieHistory} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
