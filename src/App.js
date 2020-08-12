import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, description }) => (
        <Route exact path={path} key={description}>
          <Component />
        </Route>
      ))}
      <Route path={'*'}>
        <NotFound />
      </Route>
    </Switch>
  );
};

const withRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default withRouter;
