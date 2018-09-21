import { FETCHING,FETCHED,ERR,POST } from '../action/action';

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

export const reducer = (state=initial, action) => {
switch(action.type){
	case FETCHING:
	console.log('fetching');
		return(
		{...state,fetchingFriends:true,friendsFetched:false,error:null}
		);
	case FETCHED:
	console.log(action.payload);
		return(
		{...state,fetchingFriends:false,friendsFetched:true,error:null,friends:action.payload}
		);
	case ERR:
	console.log('error');
		return(
		{...state,fetchingFriends:false,friendsFetched:false,error:true}
		);
	case POST:
		let newFriends = friends.splice('');
		newFriends.push(action.payload);
		return(
		{...state,friends:newFriends}
		);
default:
return(state);
}
};