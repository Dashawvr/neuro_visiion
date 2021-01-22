import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Login from "../Pages/Users/Login";
import Application from './Application';
import DashboardNew from "../Dashboard/DashboardNew";
import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
// import ArticleNews from './ArticleNews';
import ThemeWrapper from './ThemeWrapper';
import {Email} from "../SampleApps/Email";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <ThemeWrapper>
      <Switch>
        {/*<Route path="/" exact component={LandingCorporate} />*/}
        {/*<Route path="/landing-creative" exact component={LandingCreative} />*/}
        <Route path="/" exact component={Application} />
        {/*<Route path="/app/pages/email" component={Email}/>*/}
        <Route path="/login" component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
{/*<Route path="/blog" component={ArticleNews} />*/}
