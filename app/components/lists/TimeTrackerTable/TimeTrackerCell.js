import React, { Component } from "react";

class TimeTrackerCell extends Component {
  constructor(props) {
    super(props);
    this.udpateCell = this.udpateCell.bind(this);
    this.state = {
      timeStore: props.timeStore,
      day: null,
      time: null,
      reported: null,
      isBig: false,
      isNormal: false,
      isDefault: false,
      currentMonth: null,
      currentYear: null
    };
  }

  componentWillMount() {
    this.setState(
      {
        timeStore: this.props.timeStore,
        day: this.props.day,
        currentMonth: this.props.currentMonth,
        currentYear: this.props.currentYear,
        time: null,
        isNormal: null,
        isBig: null,
        isDefault: null
      },
      () => {
        // console.log('cell state: ', this.state);
        this.udpateCell();
      }
    );
  }

  componentWillReceiveProps(props) {
    this.setState(
      {
        timeStore: props.timeStore,
        day: props.day,
        currentMonth: props.currentMonth,
        currentYear: props.currentYear,
        time: null,
        isNormal: null,
        isBig: null,
        isDefault: null
      },
      () => {
        this.udpateCell();
      }
    );
  }

  udpateCell() {
    // console.log('in update: ', this.state.timeStore);
    let logDay = this.state.timeStore.find(el => {
      let elDate = new Date(el.date);
      return (
        elDate.getDate() === this.state.day &&
        elDate.getMonth() + 1 === this.state.currentMonth &&
        elDate.getFullYear() === this.state.currentYear
      );
    });
    if (logDay) {
      // console.log('logDay: ', logDay);
      if (logDay.time > 8) {
        this.setState({ isBig: true, time: logDay.time });
      } else if (logDay.time == 0) {
        this.setState({ isDefault: true, time: logDay.time });
      } else if (logDay.time <= 4) {
        this.setState({ isNormal: true, time: logDay.time });
      }
    }
  }

  render() {
    // console.log('render state: ', this.state);
    let cellStyle = "transparent";
    if (this.state.isBig) {
      cellStyle = "#B71C1C";
    }
    if (this.state.isNormal) {
      cellStyle = "#00E676";
    }
    if (this.state.isDefault) {
      cellStyle = "#9E9E9E";
    }
    return (
      <div className="cell">
        <div>{this.props.day}</div>
        <span style={{ background: cellStyle }}>{this.state.time}</span>
      </div>
    );
  }
}

export default TimeTrackerCell;
