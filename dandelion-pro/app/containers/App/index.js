import React, { useContext, useEffect } from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
import Auth from './Auth';
import Application from './Application';
import ThemeWrapper, { ThemeContext } from './ThemeWrapper';
import { Email } from "../SampleApps/Email";
import { useBeforeunload } from 'react-beforeunload'
import { SocketConnection } from "../../api/socket";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const socketConnection = new SocketConnection();

const f = () => {
  socketConnection.setOffline()
}

function App() {

  const changeMode = useContext(ThemeContext);

  const handleClose = () => {
    socketConnection.setOffline()
  }

  useBeforeunload(() => handleClose())

  useEffect(() => {
    handleClose()
  }, [])

  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={Auth}/>
        <Route path={"/home"} component={Application}/>
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
