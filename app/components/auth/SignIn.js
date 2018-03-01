import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TypeField from "../typeField/TypeField";
import RaisedButton from "material-ui/RaisedButton";
import { SignUpLink } from "./SignUp";
import { auth } from "../../../config/firebase";
import * as routes from "../../../constants/routes";
require("./auth.scss");

const SignInPage = ({ history }) => (
  <div className="form-container">
    <div className="page-wrapper">
      <h1>SignIn</h1>
      <SignInForm history={history} />
      <SignUpLink />
    </div>
  </div>
);

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    this.setState(
      {
        email: this.refs.emailField.state.value,
        password: this.refs.passwdField.state.value
      },
      () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      }
    );
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <TypeField
          value={email}
          ref="emailField"
          type="email"
          name="EmailAddress"
          placeholder="Email Address"
        />
        <TypeField
          value={password}
          ref="passwdField"
          type="password"
          name="Password"
          placeholder="Password"
        />
        <RaisedButton type="submit" className="submit-button" label="Sign In" />

        {error !== null ? <p>{error.message}</p> : null}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
