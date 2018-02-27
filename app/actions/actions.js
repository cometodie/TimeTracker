export const addNote = note => {
  const xhr = new XMLHttpRequest();
  // xhr.open("POST", `http://localhost:8000/notes`, false);
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send(JSON.stringify(note));
  return {
    type: "ADD_NOTE",
    payload: note
  };
};

export const deleteNote = note => {
  const xhr = new XMLHttpRequest();
  // xhr.open("DELETE", `http://localhost:8000/notes/${note._id}`, false);
  // xhr.send();
  return {
    type: "DELETE_NOTE",
    payload: note
  };
};

export const updateNote = note => {
  const xhr = new XMLHttpRequest();
  // xhr.open("PUT", `http://localhost:8000/notes/${note._id}`, false);
  // xhr.setRequestHeader('Content-Type', 'application/json');
  console.log(note);
  // xhr.send(JSON.stringify(note));
  return {
    type: "UPDATE_NOTE",
    payload: note
  };
};

export const getNotes = () => dispatch => {
  dispatch({ type: "TOGGLE_LOADING", payload: true});
  const xhr = new XMLHttpRequest();
  // xhr.open("GET", "http://localhost:8000/notes", false);
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send();

  if (xhr.status == 200) {
    dispatch({ type: "GET_NOTES", payload: JSON.parse(xhr.responseText) });
  }
  dispatch({ type: "TOGGLE_LOADING", payload: false});
};

export const setLoading = status => {
  return {
    type: "TOGGLE_LOADING",
    payload: status
  }
}

export const toggleSidebar = status => {
  return {
    type: "TOGGLE_SIDEBAR",
    payload: status
  }
}