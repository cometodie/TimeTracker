import React, { Component } from 'react';
require('./timeTrackerCell.scss');

class TimeTrackerCell extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.udpateCell = this.udpateCell.bind(this);
    this.state = {
      time: null,
      isBig: false,
      isNormal: false,
      isDefault: false
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
    if (this.props.time != null) {
      if (this.props.time > 8) {
        this.setState({ isBig: true, time: this.props.time });
      } else if (this.props.time == 0) {
        this.setState({ isDefault: true, time: this.props.time });
      } else if (this.props.time <= 4) {
        this.setState({ isNormal: true, time: this.props.time });
      }
    }
  }

  render() {
    const cellStyle = this.props.active ? '' : 'disabled';
    let cellTimeStyle = 'transparent';
    if (this.state.isBig) {
      cellTimeStyle = 'isBig';
    }
    if (this.state.isNormal) {
      cellTimeStyle = 'isNormal';
    }
    if (this.state.isDefault) {
      cellTimeStyle = 'isDefault';
    }
    return (
      <div className={'cell ' + cellStyle}>
        <div>{this.props.day}</div>
        <span className={cellTimeStyle}>{this.props.time}</span>
      </div>
    );
  }
}

export default TimeTrackerCell;
