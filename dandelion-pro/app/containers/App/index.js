import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Login from "../Pages/Users/Login";
import Application from './Application';
<<<<<<< HEAD
import ThemeWrapper, { ThemeContext } from './ThemeWrapper';
import { Email } from "../SampleApps/Email";
import { DashboardNew, EditPanel, PersonalDashboard, Roles, Stage, StreetViewMap, Users } from "../pageListAsync";

=======
// import LandingCorporate from './Landing';
// import LandingCreative from './LandingCreative';
// import ArticleNews from './ArticleNews';
import ThemeWrapper from './ThemeWrapper';
>>>>>>> 102377680c91e727212c9b3f254e56b655cc259d
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


function App() { // TODO rename this
  const changeMode = useContext(ThemeContext);
  return (
    <ThemeWrapper>
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact component={Auth}/>
        <Route  path={"/home"} component={Application}/>
=======
        <Route path="/app" component={Application} />
        <Route component={Auth} />
        <Route component={NotFound} />
>>>>>>> 102377680c91e727212c9b3f254e56b655cc259d
      </Switch>
    </ThemeWrapper>
  );
}

export default App;

{/*<Route path="/blog" component={ArticleNews} />*/
}
