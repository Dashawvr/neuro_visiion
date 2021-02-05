import React, { useContext, useEffect, useRef } from 'react';
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
  StreetViewMap, EditWidgetVideoForm, EditWidgetTableForm, EditWidgetTextForm, EditWidgetMapForm,
  UsersGroupsTable, AddGroupForm, EditGroupForm,
} from '../pageListAsync';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  },[delay]);
}

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  const hours =new Date().getHours();

  useEffect(() => {
    const lightThemeHours = hours => hours >= 4 && hours < 17;

    changeMode(lightThemeHours(hours) ? 'light' : 'dark');
  }, [hours])

  useInterval(() => {
    const hours =new Date().getHours();

    const lightThemeHours = hours => hours >= 4 && hours < 17;

    changeMode(lightThemeHours(hours) ? 'light' : 'dark');
  }, 100000)

  return (
        <Dashboard history={history} changeMode={changeMode}>
          <Switch>
            <Route exact path="/home" component={PersonalDashboard}/>
            <Route path="/home/roles"  component={RoleTable}/>
            <Route path="/home/users"  component={UserTable}/>
            <Route path="/home/group"  component={UsersGroupsTable}/>
            <Route path="/home/edit-panel"  component={EditPanel}/>
            <Route path="/home/maps"  component={StreetViewMap}/>
            <Route path="/home/stage"  component={DashboardTable}/>
            <Route path="/home/dashboard/:id"  component={DashboardNew}/>
            <Route path="/home/widget" component={AddWidgetForm}/>
            <Route path="/home/forms/edit/video" component={EditWidgetVideoForm} />
            <Route path="/home/forms/edit/map" component={EditWidgetMapForm} />
            <Route path="/home/forms/edit/text" component={EditWidgetTextForm} />
            <Route path="/home/forms/edit/table" component={EditWidgetTableForm} />
            <Route path="/home/forms/add/video" component={CreateWidgetVideoForm} />
            <Route path="/home/forms/add/text" component={CreateWidgetTextForm} />
            <Route path="/home/forms/add/map" component={CreateWidgetMapForm} />
            <Route path="/home/forms/add/table" component={CreateWidgetTableForm} />
            <Route path="/home/forms/edit/dashboard" component={EditDashboardForm} />
            <Route path="/home/forms/edit/role" component={EditRoleForm} />
            <Route path="/home/forms/edit/user" component={EditUserForm} />
            <Route path="/home/forms/edit/user" component={EditGroupForm} />
            <Route path="/home/forms/add/dashboard" component={AddDashboardForm} />
            <Route path="/home/forms/add/role" component={AddRoleForm} />
            <Route path="/home/forms/add/user" component={AddUserForm} />
            <Route path="/home/forms/add/group" component={AddGroupForm} />
          </Switch>
        </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
