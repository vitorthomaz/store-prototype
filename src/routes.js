import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

import path from './constants/paths';
console.log(path);

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
    path: path.HOME,
    Component: Home
  },
  {
    description: 'Product list',
    path: path.PRODUCTS,
    Component: Products
  },
  {
    description: 'About page',
    path: path.ABOUT,
    Component: About
  }
];

export default AppRoutes;
