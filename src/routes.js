import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

const AppRoutes = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, description }) => (
        <Route exact path={path} key={description}>
          <Component />
        </Route>
      ))}
    </Switch>
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

export default AppRoutes;
