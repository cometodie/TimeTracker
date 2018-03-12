import React, { Component } from 'react';
import TypeField from '../typeField/TypeField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { auth } from '../../../config/firebase';
import * as routes from '../../../constants/routes';
import { setSnackBar } from '../../actions/utilities';
require('./auth.scss');

const SignInPage = ({ history, setSnackBar }) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignIn</h1>
      <SignInForm history={history} setSnackBar={setSnackBar} />
      <SignUpLink />
    </div>
  </div>
);

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
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
        auth
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(currentUser => {
            if (currentUser) {
              this.props.setSnackBar(`You have successfully logged in, ${this.state.email}`);
              this.props.history.push(routes.ADD);
            }
          })
          .catch(error => {
            this.props.setSnackBar(`Incorrect password or email, please recheck data.`);
            this.setState({ error: error });
          });
      }
    );
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <TypeField value={email} ref="emailField" type="email" name="EmailAddress" placeholder="Email Address" />
        <TypeField value={password} ref="passwdField" type="password" name="Password" placeholder="Password" />
        <RaisedButton type="submit" className="submit-button" label="Sign In" />
      </form>
    );
  }
}

export default SignInPage;

export { SignInForm };
