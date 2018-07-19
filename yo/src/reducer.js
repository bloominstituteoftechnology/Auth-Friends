const initial = {

  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null

};

const reducer = (state=initial,action) => {
switch(action.type){
	default:
		return state;
	}
};

export default reducer;