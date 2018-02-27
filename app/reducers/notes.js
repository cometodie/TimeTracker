const initialState = [
  { title: "Buy a milk", text: "tomorow need go to shop", important: false },
  { title: "Unversity", text: "dont forget about practice", important: false },
  { title: "Fotball", text: "MU vs Chelsea", important: false }
];

const notes = (state = initialState, action) => {
  if (action.type === "ADD_NOTE") {
    return [...state, action.payload];
  } else if (action.type === "GET_NOTES") {
    return action.payload;
  } else if (action.type === "DELETE_NOTE") {
    const newState = Object.assign([], state);
    const indexOfCatToDelete = state.findIndex(note => {
      return note._id == action.payload._id;
    });
    newState.splice(indexOfCatToDelete, 1);
    return newState;
  } else if (action.type === "UPDATE_NOTE") {
    const newState = Object.assign([], state);
    const indexOfCatToDelete = state.findIndex(note => {
      return note._id == action.payload._id;
    });
    newState[indexOfCatToDelete] = action.payload;
    return newState;
  }
  return state;
};

export default notes;
