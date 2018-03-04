import { connect } from "react-redux";
import { setSnackBar } from "../actions/utilities";
import SignInPage from "../components/auth/SignIn";

const mapDispatchToProps = dispatch => {
  return {
    setSnackBar: state => {
      dispatch(setSnackBar(state));
    }
  };
};

export default connect(null, mapDispatchToProps)(SignInPage);
