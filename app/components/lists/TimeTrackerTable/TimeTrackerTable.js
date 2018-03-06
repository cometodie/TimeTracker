import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Checkbox from "material-ui/Checkbox";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import TimeTrackerRow from "./TimeTrackerRow";
import monthNames from "../../../../constants/monthNames";

import { db } from "../../../../config/firebase";
import { connect } from "react-redux";
import { List, ListItem } from "material-ui/List";
import { Card, CardHeader } from "material-ui/Card";
import { ArrowLeftIcon } from "../../utilities/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../utilities/icons/ArrowRightIcon";
import { getMonthArray, getUserMonths } from "../../../helpers/monthLogic";
require("./list.scss");

class TimeTrackerTable extends Component {
  constructor(props) {
    super(props);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.state = {
      month: [],
      nameOfMonth: "",
    };
  }

  componentWillReceiveProps(props) {
    const month = getMonthArray(props.currentYear, props.currentMonth, props.timeStore);
    this.setState(prevState => {
      return {
        month: month,
        countOfDays: month.size,
        rows: Math.floor(month.length / 7) + (month.length % 7 ? 1 : 0),
        nameOfMonth: monthNames[props.currentMonth - 1]
      };
    });
  }

  prevMonth() {
    this.props.onSetMonth(this.props.currentMonth - 1);
  }

  nextMonth() {
    this.props.onSetMonth(this.props.currentMonth + 1);
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.state.rows; i++) {
      const start = i * 7,
        end = (i + 1) * 7 > this.state.countOfDays ? this.state.countOfDays : (i + 1) * 7;
      rows.push(
        <TimeTrackerRow
          key={i}
          timeStore={this.props.timeStore}
          currentMonth={this.props.currentMonth}
          currentYear={this.props.currentYear}
          days={this.state.month.slice(start, end)}
        />
      );
    }
    return (
      <Card className="card min-height">
      <div className="header">
        <ArrowLeftIcon onClick={this.prevMonth}/>
        <h2>{this.state.nameOfMonth}</h2>
        <ArrowRightIcon onClick={this.nextMonth}/>
      </div>
        <div>{rows}</div>
      </Card>
    );
  }
}

TimeTrackerTable.propTypes = {
  timeStore: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.any.isRequired,
      time: PropTypes.any.isRequired
    })
  ).isRequired
};

export default TimeTrackerTable;