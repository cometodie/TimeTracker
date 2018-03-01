import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import SideBar from "./components/sideBar/SideBar";
import Loader from "./components/preLoader/Loader";

import TodoListContainer from "./containers/TodoListContainer";
import TodoListFormContainer from "./containers/TodoListFormContainer";
import * as routes from "../constants/routes";
import SignUpPage from "./components/auth/SignUp";
import SignInForm from "./components/auth/SignIn";
import withAuthentication from "./components/sessions/withAuthentication";

require("./app.scss");

const App = () => (
  <Router>
    <div className='app-container'>
      <Loader />
      <Nav />
      <SideBar />
      <Switch>
        <Route exact path={routes.LANDING} component={TodoListContainer}/>
        <Route exact path={routes.HOME} component={TodoListFormContainer} />
        <Route exact path={routes.SIGN_IN} component={SignInForm} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);
