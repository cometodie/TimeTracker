import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../../actions/actions";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import * as routes from '../../../constants/routes';
import { auth } from "../../../config/firebase";

import { Link, BrowserRouter } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.openSideBar = this.openSideBar.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      stylePaper: {
        display: "inline-block",
        margin: "0 32px 16px 0",
        position: "fixed",
        width: "336px",
        height: "100%",
        left: 0,
        transform: "translateX(-336px)",
        zIndex: "1101",
        borderRight: "1px solid #fff"
      },
      styleWrapper: {
        zIndex: "1100",
        width: "100%",
        position: "absolute",
        height: "calc(100% - 64px)"
      }
    };
  }

  openSideBar() {
    this.props.toggleSidebar(false);
  }

  logout (){
    
  }

  render() {
    this.state.stylePaper.transform = this.props.isOpen
      ? "translateX(0)"
      : "translateX(-336px)";
    return (
      <div>
        <div style={this.props.isOpen ? this.state.styleWrapper : null} onClick={this.props.isOpen ? this.openSideBar : null } />
        <Paper style={this.state.stylePaper}>
            {this.props.authUser ? <NavigationAuth onItemClick={this.openSideBar} />: <NavigationNonAuth onItemClick={this.openSideBar}/>}
        </Paper>
      </div>
    );
  }
}

const NavigationNonAuth = () =>
  <Menu>
    <MenuItem containerElement={<Link to={routes.LANDING} />} primaryText="Landing" />
    <MenuItem containerElement={<Link to={routes.SIGN_IN} />} primaryText="Sign In" />
  </Menu>

const logout = () => {
  auth.signOut();
}

const NavigationAuth = () =>
  <Menu>
    <MenuItem containerElement={<Link to={routes.LANDING} />} primaryText="Landing" />
    <MenuItem containerElement={<Link to={routes.HOME} />} primaryText="Home" />
    <MenuItem containerElement={<Link to={routes.ACCOUNT} />} primaryText="Account" />
    <MenuItem containerElement={<Link to={routes.SIGN_UP} />} primaryText="Sign Out" />
    <MenuItem onClick={logout} primaryText="Logout" />
  </Menu>


export default connect(
  state => {
    return {
      isOpen: state.sidebar,
      authUser: state.sessionState.authUser
    };
  },
  dispatch => {
    return {
      toggleSidebar: state => {
        dispatch(toggleSidebar(state));
      },
      onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
    };
  }
)(SideBar);
