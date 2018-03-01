import React, { Component } from "react";
import Router from "react-router";
import TypeField from "../typeField/TypeField";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';
require('./NoteForm.scss');


class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var title = this.refs.titleField.state.value;
    if (this.refs.titleField.state.valid) {
      this.props.onSubmitForm({ title: title });
      this.refs.titleField.state.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TypeField value="" ref="titleField" type="text" name="title note" placeholder="Enter title"/>
        <RaisedButton type="submit" label="Add Note" />
      </form>
    );
  }
}

export default NoteForm;
