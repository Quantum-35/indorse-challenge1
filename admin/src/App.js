import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import store from './store/store';
import ROUTES from './utils/Routes';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
              <Route exact path={ROUTES.login} component={Login}/>
              <Route path={ROUTES.dashboard} component={Home}/>
              <Route path={ROUTES.home} component={Signup}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
