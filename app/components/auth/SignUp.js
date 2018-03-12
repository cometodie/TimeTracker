import React, { Component } from 'react';
import TypeField from '../typeField/TypeField';
import RaisedButton from 'material-ui/RaisedButton';
import * as routes from '../../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../../config/firebase';
require('./auth.scss');

const SignUpPage = ({ history }) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignUp</h1>
      <SignUpForm history={history} />
    </div>
  </div>
);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const { history } = this.props;

    this.setState(
      {
        username: this.refs.nameField.state.value,
        email: this.refs.emailField.state.value,
        passwordOne: this.refs.passwdField.state.value,
        passwordTwo: this.refs.passwdConfField.state.value
      },
      () => {
        auth
          .createUserWithEmailAndPassword(this.state.email, this.state.passwordTwo)
          .then(data => {
            this.props.setSnackBar(`Account has successfully created!`);
          })
          .catch(error => {
            this.setState({ error: error });
          });
      }
    );
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <TypeField value={username} ref="nameField" type="text" name="FullName" placeholder="Full Name" />
        <TypeField value={email} ref="emailField" type="email" name="EmailAddress" placeholder="Email Address" />
        <TypeField value={passwordOne} ref="passwdField" type="password" name="Password" placeholder="Password" />
        <TypeField
          value={passwordTwo}
          ref="passwdConfField"
          name="ConfirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <RaisedButton type="submit" className="submit-button" label="Sign Up" />

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink, SignUpPage };
