import ReactDOM from "react-dom";
import React from "react";
import Nav from "./components/nav/Nav";
import SideBar from "./components/utilities/sideBar/SideBar";
import Loader from "./components/utilities/preLoader/Loader";
import NotFoundPage from "./components/utilities/notFoundPage/NotFoundPage";
import * as routes from "../constants/routes";
import SignUpPage from "./components/auth/SignUp";
import SignInForm from "./components/auth/SignIn";
import withAuthentication from "./components/sessions/withAuthentication";
import HomeContainer from "./containers/HomeContainer";
import SnackBar from "./components/utilities/snackBar/SnackBar";
import TimeTrackerAddContainer from "./containers/TimeTrackerAddContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInContainer from "./containers/SignInContainer";

require("./app.scss");

const App = () => (
  <Router>
    <div className='app-container'>
      <Loader />
      <Nav />
      <SideBar />
      <Switch>
        <Route exact path={routes.HOME} component={HomeContainer} />
        <Route exact path={routes.ADD} component={TimeTrackerAddContainer} />
        <Route exact path={routes.SIGN_IN} component={SignInContainer} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Switch>
      <SnackBar />
    </div>
  </Router>
);

export default withAuthentication(App);

