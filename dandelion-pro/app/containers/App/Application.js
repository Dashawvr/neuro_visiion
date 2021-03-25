import React, { useContext, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeWrapper';
import Dashboard from '../Templates/Dashboard';

import {
  UserTable, RoleTable, DashboardTable, WidgetsTable,
  AddUserForm, AddRoleForm, AddDashboardForm,
  EditUserForm, EditRoleForm, EditDashboardForm,
  AddWidgetForm, CreateWidgetVideoForm, CreateWidgetTextForm,
  CreateWidgetMapForm, CreateWidgetTableForm,
  PersonalDashboard, DashboardNew, EditPanel,
  StreetViewMap, EditWidgetVideoForm, EditWidgetTableForm, EditWidgetTextForm, EditWidgetMapForm,
  UsersGroupsTable, AddGroupForm, EditGroupForm, CamersTable, AddCameraForm,
  EditCameraForm, EditWidgetDocForm, EditWidgetLinkForm, EditWidgetImageForm, CreateWidgetDocForm,
  CreateWidgetLinkForm, CreateWidgetImageForm, DashboardOnlySee, MapsTable, AddMapForm, EditMapForm
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
            <Route path="/home/camers"  component={CamersTable}/>
            <Route path="/home/widgets"  component={WidgetsTable}/>
            <Route path="/home/maps"  component={MapsTable}/>
            <Route path="/home/stage"  component={DashboardTable}/>

            <Route path="/home/edit/dashboard/:id"  component={DashboardNew}/>
            <Route path="/home/dashboard/:id"  component={DashboardOnlySee}/>

            <Route path="/home/forms/edit/link" component={EditWidgetLinkForm} />
            <Route path="/home/forms/edit/doc" component={EditWidgetDocForm} />
            <Route path="/home/forms/edit/image" component={EditWidgetImageForm} />
            <Route path="/home/forms/edit/video" component={EditWidgetVideoForm} />
            <Route path="/home/forms/edit/map" component={EditWidgetMapForm} />
            <Route path="/home/forms/edit/text" component={EditWidgetTextForm} />
            <Route path="/home/forms/edit/table" component={EditWidgetTableForm} />

            <Route path="/home/widget" component={AddWidgetForm}/>
            <Route path="/home/forms/add/doc" component={CreateWidgetDocForm} />
            <Route path="/home/forms/add/image" component={CreateWidgetImageForm} />
            <Route path="/home/forms/add/link" component={CreateWidgetLinkForm} />
            <Route path="/home/forms/add/video" component={CreateWidgetVideoForm} />
            <Route path="/home/forms/add/text" component={CreateWidgetTextForm} />
            <Route path="/home/forms/add/map" component={CreateWidgetMapForm} />
            <Route path="/home/forms/add/table" component={CreateWidgetTableForm} />

            <Route path="/home/forms/edit/scene" component={EditDashboardForm} />
            <Route path="/home/forms/edit/role" component={EditRoleForm} />
            <Route path="/home/forms/edit/user" component={EditUserForm} />
            <Route path="/home/forms/edit/camera" component={EditCameraForm} />
            <Route path="/home/forms/edit/maps" component={EditMapForm} />
            <Route path="/home/forms/edit/group" component={EditGroupForm} />

            <Route path="/home/forms/add/scene" component={AddDashboardForm} />
            <Route path="/home/forms/add/role" component={AddRoleForm} />
            <Route path="/home/forms/add/user" component={AddUserForm} />
            <Route path="/home/forms/add/group" component={AddGroupForm} />
            <Route path="/home/forms/add/camera" component={AddCameraForm} />
            <Route path="/home/forms/add/maps" component={AddMapForm} />
          </Switch>
        </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
