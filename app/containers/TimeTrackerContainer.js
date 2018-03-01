import { connect } from "react-redux";
import { compose } from 'recompose';

import TimeTrackerList from "../components/lists/TimeTrackerList";
import withAuthorization from "../components/sessions/withAuthorization";
import { setTime } from "../actions/timeActions";

const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
    timeStore: state.timeTrackerState.userTime,
  };
};

const authCondition = (authUser) => !!authUser;

const mapDispatchToProps = dispatch => {
  return {
    onSetTime: (time) => dispatch(setTime(time)),
    toggleLoading: status => { 
      dispatch(setLoading(status))
    }
  };
};

export default 
compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(TimeTrackerList);
