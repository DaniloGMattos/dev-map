import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';
import Main from '../pages/main';

// import { Container } from './styles';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Router;
