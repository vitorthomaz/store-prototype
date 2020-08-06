import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route exact path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

const routes = [
  {
    description: 'Home page',
    path: '/',
    Component: Home
  },
  {
    description: 'Product list',
    path: '/products',
    Component: Products
  }
];

export default AppRouter;
