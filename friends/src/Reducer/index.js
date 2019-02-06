
const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null  
}

function reducer(state = initialState, action){
  switch(action.type){
    
    default:
    return state;
  }

}

export default reducer;