import React, { Component } from "react";
import Router from "react-router";
import NoteField from "../textField/NoteField";
import TitleField from "../titleField/TitleField";
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
    var text = this.refs.textField.state.value;
    if (this.refs.titleField.state.valid && this.refs.textField.state.valid) {
      this.props.onSubmitForm({ title: title, text: text });
      this.refs.titleField.state.value = '';
      this.refs.textField.state.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TitleField value="" ref="titleField" />
        <NoteField value="" ref="textField" />
        <RaisedButton type="submit" label="Add Note" />
      </form>
    );
  }
}

export default NoteForm;
