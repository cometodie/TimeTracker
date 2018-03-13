import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./Loader.scss');

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="wrapper">
          {/* <div className="head">
            <div className="topHead">
              <div className="eyebrow1" />
              <div className="eyebrow2" />
              <div className="eye1">
                <div className="black" />
              </div>
              <div className="eye2">
                <div className="black" />
              </div>
            </div>
            <div className="mouth" />
          </div> */}
        </div>
      );
    }
    return null;
  }
}

export default connect(
  state => {
    return {
      isLoading: state.loading
    };
  },
  dispatch => ({})
)(Loader);
