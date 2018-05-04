import React, { Component } from 'react';
import TimeTrackerCell from '../timeTrackerCell/TimeTrackerCell';

require('./timeTrackerRow.scss');

class TimeTrackerRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
  }

  componentWillMount() {
    this.setState({
      days: this.props.days,
      currentMonth: this.props.currentMonth,
      currentYear: this.props.currentYear
    });
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      days: nProps.days,
      currentMonth: nProps.currentMonth,
      currentYear: nProps.currentYear
    });
  }

  render() {
    const row = this.props.days.map((el, i) => {
      return <TimeTrackerCell day={el.day} time={el.time} active={el.activeMount} key={i} />;
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
