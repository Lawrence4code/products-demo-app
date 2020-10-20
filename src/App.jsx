import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ProductsList from './pages/ProductsList';
import PageNotFound from './pages/PageNotFound';
import PrivateRoute from './components/utils/PrivateRoute';
import UserProfile from './pages/UserProfile'

import './App.css';

function App() {
  return (
    <div className="h-full">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <PrivateRoute
            exact
            path="/products"
            component={ProductsList}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/profile"
            component={UserProfile}
          ></PrivateRoute>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
