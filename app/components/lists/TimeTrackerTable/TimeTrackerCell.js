import React, { Component } from "react";

class TimeTrackerCell extends Component {
  constructor(props) {
    super(props);
    this.udpateCell = this.udpateCell.bind(this);
    this.state = {
      time: null,
      reported: null,
      isBig: false,
      isNormal: false,
      isDefault: false,
    };
  }

  componentWillMount() {
    this.setState(
      {
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

  componentWillReceiveProps(props) {
    this.setState(
      {
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
    let logDay = this.props.timeStore.find(el => {
      let elDate = new Date(el.date);
      return (
        elDate.getDate() === this.props.day &&
        elDate.getMonth() + 1 === this.props.currentMonth &&
        elDate.getFullYear() === this.props.currentYear
      );
    });
    if (logDay) {
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
