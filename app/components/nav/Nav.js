import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { connect } from 'react-redux';
import { toggleSidebar } from 'actions/utilities';
import { Link, BrowserRouter } from 'react-router-dom';
require('./nav.scss');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.openSideBar = this.openSideBar.bind(this);
  }

  openSideBar() {
    this.props.toggleSidebar(true);
  }

  render() {
    return (
      <AppBar
        iconElementLeft={
          this.props.isOpen ? (
            <IconButton>
              <NavigationClose />
            </IconButton>
          ) : null
        }
        onLeftIconButtonClick={this.openSideBar}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.sidebar
  };
};

export default connect(mapStateToProps, dispatch => {
  return {
    toggleSidebar: state => {
      dispatch(toggleSidebar(state));
    }
  };
})(Nav);
