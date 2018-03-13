import React, { Component } from "react";
import TimeTrackerTable from "table/TimeTrackerTable/TimeTrackerTable";
import * as dbApi from "dbApi/TimeTrackerApi";
import * as routes from "constants/routes";

import { Link } from "react-router-dom";
import { RaisedButton } from "material-ui";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: props.currentMonth,
      timeStore: []
    };
  }

  componentWillMount() {
    this.props.onSetData(dbApi.getTimeDate(this.props.authUser.uid));
  }

  render() {
    return (
      <div className="container">
        <div className="page-wrapper">
          <TimeTrackerTable {...this.props} />
          <RaisedButton
            className="add-button"
            containerElement={<Link to={routes.ADD} className="add-time" />}  
            label="Add time"
            primary={true}
          />
        </div>
      </div>
    );
  }
}

export default Home;
