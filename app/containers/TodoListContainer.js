import { connect } from "react-redux";

import TodoList from "../components/lists/TodoList";
import { getNotes } from "../actions/actions";
import { deleteNote } from "../actions/actions";
import { updateNote } from "../actions/actions";
import { setLoading } from "../actions/actions";

const getMultiplicity = notesLength => {
  return notesLength % 2 == 0 ? "blue" : "red";
};

const mapStateToProps = state => {
  return {
    noteStore: state.notes,
    isMultiplicity: getMultiplicity(state.notes.length)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => dispatch(getNotes()),
    deleteNote: (note) => dispatch(deleteNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    toggleLoading: status => { 
      dispatch(setLoading(status))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
