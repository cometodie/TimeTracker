import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TypeField from "../typeField/TypeField";
import RaisedButton from "material-ui/RaisedButton";
import { SignUpLink } from "./SignUp";
import * as auth from "../../../config/auth";
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

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

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
    const { email, password } = this.state;

    const { history } = this.props;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({
          email: "",
          password: "",
          error: null
        }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <TypeField
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="text"
          name="EmailAddress"
          placeholder="Email Address"
        />
        <TypeField
          value={password}
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
          type="password"
          name="Password"
          placeholder="Password"
        />
        <RaisedButton type="submit" className="submit-button" label="Sign In" />

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
