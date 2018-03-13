import NotFoundPage from 'utilities/notFoundPage/NotFoundPage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser
  };
};

const authCondition = authUser => !!authUser;

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);
