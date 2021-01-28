import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Login from "../Pages/Users/Login";
import Application from './Application';
import ThemeWrapper, { ThemeContext } from './ThemeWrapper';
import { Email } from "../SampleApps/Email";
import { DashboardNew, EditPanel, PersonalDashboard, Roles, Stage, StreetViewMap, Users } from "../pageListAsync";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


function App() { // TODO rename this
  const changeMode = useContext(ThemeContext);
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={Auth}/>
        <Route  path={"/home"} component={Application}/>
      </Switch>
    </ThemeWrapper>
  );
}

export default App;

{/*<Route path="/blog" component={ArticleNews} />*/
}
