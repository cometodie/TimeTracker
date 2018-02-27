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
require("./list.scss");

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  componentWillMount() {
    this.props.getNotes();
  }

  deleteNote(note) {
    this.props.deleteNote(note);
  }

  updateNote(note) {
    this.props.updateNote(note);
  }

  updateCheck(note) {
    note.important = !note.important;
    console.log('todolist send: ', note);
    this.updateNote(note);
  }

  render() {
    return (
      <Card className="card">
        <CardHeader
          title="Football dude"
          subtitle="here you can manage your notes"
          className="cardHeader"
          avatar="assets/images/RV1YFXOLicc.jpg"
        />
        <List>
          {this.props.noteStore.map((note, index) => {
            return (
              <div className="row-flex" key={index}>
                <div className="row-flex">
                  <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    checked={note.important}
                    onCheck={this.updateCheck.bind(this, note)}
                    className="important"
                  />
                  <ListItem
                    key={index}
                    style={{ color: this.props.isMultiplicity }}
                  >
                    Title: {note.title}. Text: {note.text}
                  </ListItem>
                </div>
                <IconButton onClick={this.deleteNote.bind(this, note)}>
                  <NavigationClose />
                </IconButton>
              </div>
            );
          })}
        </List>
      </Card>
    );
  }
}

TodoList.propTypes = {
  noteStore: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default TodoList;
