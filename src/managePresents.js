const initialState = { numberOfPresents: 0 };

const action = {
  type: "presents/increase",
}

export function managePresents(state = initialState, action) {
  const newState = {numberOfPresents : state.numberOfPresents}
  if (action.type === "presents/increase") {
    newState.numberOfPresents += 1
    return newState
  }
  else {
    return newState
  }
}
