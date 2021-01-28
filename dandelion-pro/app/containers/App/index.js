import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Login from "../Pages/Users/Login";
import Application from './Application';
import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
// import ArticleNews from './ArticleNews';
import ThemeWrapper from './ThemeWrapper';
import { Email } from "../SampleApps/Email";

import { isAuthorised } from '../../api/helpers';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  const { isAuthorised } = useSelector((state) => {
    return ({
      isAuthorised: state.get('auth').isAuthorised
    });
  })
  return (
    <ThemeWrapper>
      <Switch>
        {/*<Route path="/" exact component={LandingCorporate} />*/}
        {/*<Route path="/landing-creative" exact component={LandingCreative} />*/}
        {isAuthorised && <Route exact path="/" component={Application}/>}
        {/*<Route path="/app/pages/email" component={Email}/>*/}
        <Route path="/login" component={Auth}/>
        <Redirect to='/login'/>
        <Route component={NotFound}/>

      </Switch>
    </ThemeWrapper>
  );
}

export default App;
{/*<Route path="/blog" component={ArticleNews} />*/
}
