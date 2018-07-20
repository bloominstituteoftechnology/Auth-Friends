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
	case 'GETTING_FRIENDS':
		return {
		...state,fetchingFriends:true
		};
	case 'GOT_FRIENDS':
		return {
		...state,fetchingFriends:false,friendsFetched:true,friends:action.payload
		};
	case 'ERROR':
		return {
		...state,error:action.payload
		};
	case 'ADDING_FRIENDS':
		return {
		...state,savingFriends: true, friendsSaved: false
		};
	case 'FRIENDS_SAVED':
		return {
		...state,
		savingFriends: false, friendsSaved: true,
		friends:[...state.friends,{name:action.payload.name,
											age:action.payload.age,
											email:action.payload.email}]
		};
	default:
		return state;
	}
};

export default reducer;