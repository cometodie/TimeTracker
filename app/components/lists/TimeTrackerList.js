import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List, ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import { Card, CardHeader } from "material-ui/Card";
import Checkbox from "material-ui/Checkbox";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import * as dbApi from "../../dbApi/TimeTrackerApi";
import { db } from "../../../config/firebase";
require("./list.scss");

class TimeTrackerList extends Component {
  constructor(props) {
    super(props);
    this.addTime = this.addTime.bind(this);
    this.getTime = this.getTime.bind(this);
    this.state = {
      timeStore: []
    };
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
    timeRef.on("child_added", snapshot => {    
      this.setState((prevState) => ({
        timeStore: prevState.timeStore.concat({
          date: snapshot.val().date,
          time: snapshot.val().time,
          id: snapshot.key
        })
      }),()=>{
        this.props.onSetTime(this.state.timeStore);
      });
    })
  }

  componentWillReceiveProps() {
    const { timeStore } = this.props;
  }

  addTime() {
    dbApi.doCreateTime(
      this.props.authUser.uid,
      this.state.date,
      this.state.time
    );
    this.getTime();
  }

  render() {
    return (
      <Card className="card">
        <input
          type="text"
          onChange={e => this.setState({ date: e.target.value })}
        />
        <input
          type="text"
          onChange={e => this.setState({ time: e.target.value })}
        />
        <button type="submit" onClick={this.addTime}>
          Add
        </button>
      </Card>
      //     <List>
      //       {this.props.timeStore.map((note, index) => {
      //         return (
      //           <ListItem key={index}>
      //             {/* Title: {note.title}. Text: {note.text} */}
      //           </ListItem>
      //         );
      //       })}
      //     </List>
    );
  }
}

TimeTrackerList.propTypes = {
  timeStore: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.any.isRequired,
      time: PropTypes.any.isRequired
    })
  ).isRequired
};

export default TimeTrackerList;
