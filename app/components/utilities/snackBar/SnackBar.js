import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import { setSnackBar } from '../../../actions/utilities';

class SnackBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillReceiveProps(props){
    console.log(props);
    this.setState({
      open: props.textSnack.length > 0
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
    this.props.setSnackBar('');
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.props.textSnack}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      textSnack: state.snackBar,
      authUser: state.sessionState.authUser
    };
  },
  dispatch => {
    return {
      setSnackBar: state => {
        dispatch(setSnackBar(state));
      },
    };
  }
)(SnackBar);