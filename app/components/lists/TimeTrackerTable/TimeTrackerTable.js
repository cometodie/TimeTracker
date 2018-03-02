import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Checkbox from "material-ui/Checkbox";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import TimeTrackerRow from "./TimeTrackerRow";
import * as dbApi from "../../../dbApi/TimeTrackerApi";
import * as routes from "../../../../constants/routes";

import { db } from "../../../../config/firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import { Card, CardHeader } from "material-ui/Card";
import { RaisedButton } from "material-ui";
require("./list.scss");

class TimeTrackerTable extends Component {
  constructor(props) {
    super(props);
    this.getTime = this.getTime.bind(this);
    this.prepareArray = this.prepareArray.bind(this);
    this.state = {
      timeStore: [],
      month: [],
      currentMonth: 0,
      currentYear: 0
    };
  }

  componentWillMount() {
    this.getTime();
    let month = this.prepareArray(this.state.currentYear, this.state.currentMonth);
    this.setState({
      month: month,
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    });
  }

  componentWillReceiveProps(nProps) {
    this.setState({ timeStore: nProps.timeStore });
  }

  prepareArray(year, mounth) {
    let size = new Date(year, mounth, 0).getDate();
    let daysMonth = Array.from(Array(size).keys());
    daysMonth.shift(0);
    daysMonth.push(size);
    this.setState({ countOfdays: size });
    return daysMonth;
  }

  getTime() {
    let timeRef = db
      .ref(`/TimeTracker/${this.props.authUser.uid}`)
      .orderByKey()
      .limitToLast(100);
    let tempStore = [];
    timeRef.on("child_added", snapshot => {
      tempStore.push({
        date: snapshot.val().date,
        time: snapshot.val().time,
        id: snapshot.key
      });
    });
    this.props.onSetTime(tempStore);
  }

  render() {
    // let calendar = [];
    // let tr = [];
    // let week = 0;
    // let residue = this.state.countOfdays % 7;
    // let tempLastDay = 0;
    // console.log("state from render: ", this.state.timeStore);
    // console.log("props from render: ", this.props.timeStore.length);
    // if (this.state.timeStore) {
    //   this.state.month.forEach((value, index) => {
    //     tr.push(
    //       <th key={index}>
    //         {value}
    //         <div className="cellTime">
    //           <span>Hours:</span>
    //         </div>
    //       </th>
    //     );
    //     if (value % 7 == 0) {
    //       calendar.push(<tr key={week}>{tr}</tr>);
    //       tempLastDay = value;
    //       tr = [];
    //       week++;
    //     }
    //   });
    //   for (let i = 1; i < residue + 1; i++) {
    //     tr.push(
    //       <th key={tempLastDay - i}>
    //         {tempLastDay + i}
    //         <div className="cellTime">
    //           <span>Hours:</span>
    //         </div>
    //       </th>
    //     );
    //   }
    //   calendar.push(<tr key={week}>{tr}</tr>);
    //   tr = [];
    //   week++;
    return (
      <div className="container">
        <div className="page-wrapper">
          <Card className="card">
            {/* <table>
              <tbody>{calendar}</tbody>
            </table> */}
            <TimeTrackerRow {...this.props}/>
            <RaisedButton
              containerElement={<Link to={routes.ADD} className="add-time" />}
              label="Add time"
              primary={true}
            />
          </Card>
        </div>
      </div>
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
