import TimeTrackerAdd from 'components/timeTrackerAdd/timeTrackerAdd';
import withAuthorization from 'sessions/withAuthorization';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { setTimeTrackerData } from 'actions/timeActions';
import { setSnackBar, setLoading } from 'actions/utilities';

const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
    timeStore: state.timeTrackerState.userTime
  };
};

const authCondition = authUser => !!authUser;

const mapDispatchToProps = dispatch => {
  return {
    onSetData: time => dispatch(setTimeTrackerData(time)),
    setLoading: state => dispatch(setLoading(state)),
    setSnackBar: state => {
      dispatch(setSnackBar(state));
    },
    toggleLoading: status => {
      dispatch(setLoading(status));
    }
  };
};

export default compose(withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(TimeTrackerAdd);
