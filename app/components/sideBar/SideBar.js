import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../../actions/actions";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

import { Link, BrowserRouter } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.openSideBar = this.openSideBar.bind(this);
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

  render() {
    this.state.stylePaper.transform = this.props.isOpen
      ? "translateX(0)"
      : "translateX(-336px)";
    return (
      <div>
        <div
          style={this.props.isOpen ? this.state.styleWrapper : null}
          onClick={this.props.isOpen ? this.openSideBar : null}
        />
        <Paper style={this.state.stylePaper}>
          <Menu onItemClick={this.openSideBar}>
            <MenuItem containerElement={<Link to="/" />} primaryText="Home" />
            <MenuItem
              containerElement={<Link to="/TodoList" />}
              primaryText="List of notes"
            />
          </Menu>
        </Paper>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isOpen: state.sidebar
    };
  },
  dispatch => {
    return {
      toggleSidebar: state => {
        dispatch(toggleSidebar(state));
      }
    };
  }
)(SideBar);
