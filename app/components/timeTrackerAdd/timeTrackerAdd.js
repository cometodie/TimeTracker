import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as dbApi from 'dbApi/TimeTrackerApi';
import * as routes from 'constants/routes';
import DatePicker from 'material-ui/DatePicker';
import TypeField from 'typeField/TypeField';

import { withRouter } from 'react-router-dom';
import { db } from 'config/firebase';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { Card, CardHeader } from 'material-ui/Card';
import { RaisedButton } from 'material-ui';

require('./timeTracker.scss');

class TimeTrackerAdd extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.addTime = this.addTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      timeStore: [],
      date: null,
      time: null
    };
  }

  handleChange(event, date) {
    this.setState({
      date: TimeTrackerAdd.prepareDate(date)
    });
  }

  back() {
    this.props.history.push(routes.HOME);
  }

  static prepareDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  componentWillMount(props) {
    const { onSetTime } = this.props;
    this.props.setLoading(true);
    this.props.onSetData(dbApi.getTimeDate(this.props.authUser.uid));
    this.props.setLoading(false);
  }

  addTime(event) {
    event.preventDefault();
    if (this.refs.timeField.state.value && this.state.date) {
      this.props.setLoading(true);
      let time = this.refs.timeField.state.value;
      this.setState(
        {
          time: this.refs.timeField.state.value
        },
        () => {
          var existEl = this.props.timeStore.find(el => el.date == this.state.date);
          existEl
            ? dbApi.updateTime(this.props.authUser.uid, existEl.id, this.state.time)
            : dbApi.doCreateTime(this.props.authUser.uid, this.state.date, this.state.time);

          this.props.setLoading(false);
          this.props.setSnackBar('Your time successfuly reported!');
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
              <TypeField type="number" value="" ref="timeField" name="Time Field" min="0" max="24" />
              <div className="flex-row">
                <RaisedButton className="submit-button" label="Back" secondary={true} onClick={this.back} />
                <RaisedButton type="submit" className="submit-button" primary={true} label="Add Time" />
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(TimeTrackerAdd);
