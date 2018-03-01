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
import TimeTrackerContainer from "./containers/TimeTrackerContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SnackBar from "./components/utilities/snackBar/SnackBar";

require("./app.scss");

const App = () => (
  <Router>
    <div className='app-container'>
      <Loader />
      <Nav />
      <SideBar />
      <Switch>
        <Route exact path={routes.HOME} component={TimeTrackerContainer} />
        <Route exact path={routes.SIGN_IN} component={SignInForm} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Switch>
      <SnackBar />
    </div>
  </Router>
);

export default withAuthentication(App);
