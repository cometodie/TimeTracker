import { connect } from "react-redux";
import { addNote } from "../actions/actions";
import NoteForm from "../components/noteForm/NoteForm";

const mapStateToProps = state => {
  return {
    noteStore: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: note => {
      dispatch(addNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
