
const friendsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_FRIENDS':
    case 'ADD_FRIEND':
    case 'DELETE_FRIEND':
      return [...action.friends]
    default:
      return state
  }
}

export default friendsReducer
