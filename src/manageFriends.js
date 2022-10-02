export function manageFriends(state, action) {
  const newState = {...state}
  if (action.type === "friends/add") {
    newState.friends.push(action.payload)
    return newState
  }
  else if (action.type === "friends/remove") {
    newState.friends = newState.friends.filter(friend => friend.id != action.payload)
    return newState

   }
   else {
    return newState
   }
}
