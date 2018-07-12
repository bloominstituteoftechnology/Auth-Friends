
const friendsReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_FRIENDS':
      return [...state, ...action.friends]
    default:
      return state
  }
}

export default friendsReducer
