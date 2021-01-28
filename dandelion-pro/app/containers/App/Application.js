import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './ThemeWrapper';
import Dashboard from '../Templates/Dashboard';

import {
  PersonalDashboard, Stage , DashboardNew, Roles, Users, EditPanel,
   StreetViewMap, NotFound
} from '../pageListAsync';


import { withRouter } from "react-router-dom";

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
        <Dashboard history={history} changeMode={changeMode}>
          <Switch>
            <Route exact path="/home" component={PersonalDashboard}/>
            <Route path="/home/roles"  component={Roles}/>
            <Route path="/home/users"  component={Users}/>
            <Route path="/home/edit-panel"  component={EditPanel}/>
            <Route path="/home/maps"  component={StreetViewMap}/>
            <Route path="/home/stage"  component={Stage}/>
            <Route path="/home/dashboard/:id"  component={DashboardNew}/>
          </Switch>
        </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
