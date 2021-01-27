import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Login from "../Pages/Users/Login";
import Application from './Application';
import history from "../../utils/history";
import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
// import ArticleNews from './ArticleNews';
import ThemeWrapper, { ThemeContext } from './ThemeWrapper';
import { Email } from "../SampleApps/Email";
import { DashboardNew, EditPanel, PersonalDashboard, Roles, Stage, StreetViewMap, Users } from "../pageListAsync";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

import Dashboard from '../Templates/Dashboard';


function App() {
  const changeMode = useContext(ThemeContext);
  return (
    <ThemeWrapper>
      <Switch>
        {/*<Route path="/" exact component={LandingCorporate} />*/}
        {/*<Route path="/landing-creative" exact component={LandingCreative} />*/}

        {/* 1!!!!!!!!1*/}
        {/*<Route  path={"/login"} component={Auth}/>*/}
        {/*<Route exact path={"/"} component={Application}/>*/}

        {/*3!!!!!!!!!!*/}
        <Route path="/" exact component={Auth}/>
        <Route  path={"/app"} component={Application}/>

        {/*2!!!!!!!!!*/}
        {/*<Route exact path={"/"} component={Application}/>*/}
        {/*<Route component={Auth}/>*/}

        {/*<Route path="/app/users/" component={Users}/>*/}

        {/*<Route exact path='/login' component={Auth}/>*/}
        {/*<Route component={NotFound} />*/}
      </Switch>
    </ThemeWrapper>
  );
}

export default App;

{/*<Route path="/blog" component={ArticleNews} />*/
}
