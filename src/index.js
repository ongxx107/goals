import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { firebaseApp } from './firebase';
import history from './history';
import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log("user signed in or up");
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/');

  } else {
    // console.log('user has sign out');
    history.replace('/signin');
  }
})

/*
  history directory has push, pop, replace methods. Push add navigation for
  redirection after authentication.
*/
ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
    <Switch>
      <Router history = {history}>
        <Route exact path = "/" component = { App } />
        <Route path = "/signin" component = { SignIn } />
        <Route path = "/signup" component = { SignUp } />
      </Router>
    </Switch>

    </BrowserRouter>
  </Provider>, document.getElementById('root')
)
