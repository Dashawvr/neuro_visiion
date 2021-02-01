import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeWrapper';
import Dashboard from '../Templates/Dashboard';

import {
  UserTable, RoleTable, DashboardTable,
  AddUserForm, AddRoleForm, AddDashboardForm,
  EditUserForm, EditRoleForm, EditDashboardForm,
  AddWidgetForm, CreateWidgetVideoForm, CreateWidgetTextForm,
  CreateWidgetMapForm, CreateWidgetTableForm,
  PersonalDashboard, DashboardNew, EditPanel,
   StreetViewMap,
} from '../pageListAsync';


function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
        <Dashboard history={history} changeMode={changeMode}>
          <Switch>
            <Route exact path="/home" component={PersonalDashboard}/>
            <Route path="/home/roles"  component={RoleTable}/>
            <Route path="/home/users"  component={UserTable}/>
            <Route path="/home/edit-panel"  component={EditPanel}/>
            <Route path="/home/maps"  component={StreetViewMap}/>
            <Route path="/home/stage"  component={DashboardTable}/>
            <Route path="/home/dashboard/:id"  component={DashboardNew}/>
            <Route path="/home/forms/add/widget/video" component={CreateWidgetVideoForm} />
            <Route path="/home/forms/add/widget/text" component={CreateWidgetTextForm} />
            <Route path="/home/forms/add/widget/map" component={CreateWidgetMapForm} />
            <Route path="/home/forms/add/widget/table" component={CreateWidgetTableForm} />
            <Route path="/home/forms/add/widget" component={AddWidgetForm} />
            <Route path="/home/forms/edit/dashboard" component={EditDashboardForm} />
            <Route path="/home/forms/edit/role" component={EditRoleForm} />
            <Route path="/home/forms/edit/user" component={EditUserForm} />
            <Route path="/home/forms/add/dashboard" component={AddDashboardForm} />
            <Route path="/home/forms/add/role" component={AddRoleForm} />
            <Route path="/home/forms/add/user" component={AddUserForm} />
          </Switch>
        </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
