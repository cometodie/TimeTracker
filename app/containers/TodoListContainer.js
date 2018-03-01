import { connect } from "react-redux";
import { compose } from 'recompose';

import TodoList from "../components/lists/TodoList";
import { getNotes } from "../actions/actions";
import { deleteNote } from "../actions/actions";
import { updateNote } from "../actions/actions";
import { setLoading } from "../actions/actions";
import withAuthorization from "../components/sessions/withAuthorization";

const getMultiplicity = notesLength => {
  return notesLength % 2 == 0 ? "blue" : "red";
};

const mapStateToProps = state => {
  return {
    noteStore: state.notes,
    authUser: state.sessionState.authUser,
    isMultiplicity: getMultiplicity(state.notes.length)
  };
};

const authCondition = (authUser) => !!authUser;

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

export default 
compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(TodoList);
