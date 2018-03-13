import withAuthorization from 'sessions/withAuthorization';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { setTimeTrackerData, setMonth } from 'actions/timeActions';
import { setLoading } from 'actions/utilities';
import Home from 'components/home/Home';

const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
    timeStore: state.timeTrackerState.userTime,
    currentMonth: state.currentMonth,
    currentYear: state.currentYear
  };
};

const authCondition = authUser => !!authUser;

const mapDispatchToProps = dispatch => {
  return {
    onSetData: time => dispatch(setTimeTrackerData(time)),
    onSetMonth: month => dispatch(setMonth(month)),
    setLoader: time => dispatch(setLoading(time)),
    toggleLoading: status => {
      dispatch(setLoading(status));
    }
  };
};

export default compose(withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(Home);
