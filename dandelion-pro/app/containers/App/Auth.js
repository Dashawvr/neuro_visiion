import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  Login,
} from '../pageListAsync';

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Outer>
  );
}

export default Auth;
