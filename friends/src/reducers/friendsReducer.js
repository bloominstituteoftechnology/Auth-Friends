
const friendsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_FRIENDS':
    case 'ADD_FRIENDS':
      return [...action.friends]
    default:
      return state
  }
}

export default friendsReducer
