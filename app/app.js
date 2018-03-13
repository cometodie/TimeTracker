import ReactDOM from 'react-dom';
import React from 'react';
import Nav from 'components/nav/Nav';
import SideBar from 'utilities/sideBar/SideBar';
import Loader from 'utilities/preLoader/Loader';
import * as routes from 'constants/routes';
import SignUpPage from 'components/auth/SignUp';
import SignInForm from 'components/auth/SignIn';
import withAuthentication from 'sessions/withAuthentication';
import HomeContainer from 'containers/HomeContainer';
import SnackBar from 'utilities/snackBar/SnackBar';
import TimeTrackerAddContainer from 'containers/TimeTrackerAddContainer';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SignInContainer from 'containers/SignInContainer';
import NotFoundCountainer from 'containers/NotFoundCountainer';

require('./app.scss');

const App = () => (
  <Router>
    <div className="app-container">
      <Loader />
      <Nav />
      <SideBar />
      <Switch>
        <Route exact path={routes.HOME} component={HomeContainer} />
        <Route exact path={routes.ADD} component={TimeTrackerAddContainer} />
        <Route exact path={routes.SIGN_IN} component={SignInContainer} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route path="*" component={NotFoundCountainer} />
      </Switch>
      <SnackBar />
    </div>
  </Router>
);

export default withAuthentication(App);
