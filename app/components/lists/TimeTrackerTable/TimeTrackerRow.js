import React, { Component } from "react";
import TimeTrackerCell from "./TimeTrackerCell";
require("./list.scss");

class TimeTrackerRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      timeStore: []
    };
  }

  componentWillMount() {
    this.setState({
      days: this.props.days,
      timeStore: this.props.timeStore,
      currentMonth: this.props.currentMonth,
      currentYear: this.props.currentYear
    });
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      days: nProps.days,
      timeStore: nProps.timeStore,
      currentMonth: nProps.currentMonth,
      currentYear: nProps.currentYear
    });
  }

  render() {
    const row = this.props.days.map((el, i) => {
      return <TimeTrackerCell {...this.props} day={el} key={i} />;
    });
    return (
      <div className="flex-row">
        <span>Hours: </span>
        <div className="flex-row">{row}</div>
      </div>
    );
  }
}

export default TimeTrackerRow;
