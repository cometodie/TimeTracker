import withAuthorization from "../components/sessions/withAuthorization";

import { connect } from "react-redux";
import { compose } from "recompose";
import { setTime, setMonth } from "../actions/timeActions";
import { setLoading } from "../actions/utilities";
import Home from "../components/home/Home";

const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
    currentMonth: state.currentMonth,
    timeStore: state.timeTrackerState.userTime
  };
};

const authCondition = authUser => !!authUser;

const mapDispatchToProps = dispatch => {
  return {
    onSetTime: time => dispatch(setTime(time)),
    onSetMonth: month => dispatch(setMonth(month)),
    setLoader: time => dispatch(setLoading(time)),
    toggleLoading: status => {
      dispatch(setLoading(status));
    }
  };
};

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
