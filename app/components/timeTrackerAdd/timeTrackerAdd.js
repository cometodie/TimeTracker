import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Checkbox from "material-ui/Checkbox";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import * as dbApi from "../../dbApi/TimeTrackerApi";
import * as routes from "../../../constants/routes";
import DatePicker from "material-ui/DatePicker";
import TypeField from "../typeField/TypeField";

import { withRouter } from "react-router-dom";
import { db } from "../../../config/firebase";
import { connect } from "react-redux";
import { List, ListItem } from "material-ui/List";
import { Card, CardHeader } from "material-ui/Card";
import { RaisedButton } from "material-ui";

require("./timeTracker.scss");

class TimeTrackerAdd extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.addTime = this.addTime.bind(this);
    this.getTime = this.getTime.bind(this);
    this.prepareDate = this.prepareDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      timeStore: [],
      date: null,
      time: null
    };
  }

  handleChange(event, date) {
    this.setState({
      date: this.prepareDate(date)
    });
  }

  prepareDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  componentDidMount(props) {
    const { onSetTime } = this.props;
    this.getTime();
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

  componentWillReceiveProps() {
    const { timeStore } = this.props;
  }

  addTime(event) {
    event.preventDefault();
    if (this.refs.timeField.state.value) {
      let time = this.refs.timeField.state.value;
      this.setState(
        {
          time: this.refs.timeField.state.value
        },
        () => {
          dbApi.doCreateTime(this.props.authUser.uid, this.state.date, this.state.time);
          this.props.setSnackBar("Your time successfuly reported!");
          this.getTime();
          this.props.history.push(routes.HOME);
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-wrapper">
          <Card className="card">
            <form onSubmit={this.addTime}>
              <DatePicker hintText="Portrait Dialog" container="inline" mode="landscape" onChange={this.handleChange} />
              <TypeField type="number" value="" ref="timeField" name="Time Field" />
              <RaisedButton type="submit" className="submit-button" label="Add Time" />
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(TimeTrackerAdd);
