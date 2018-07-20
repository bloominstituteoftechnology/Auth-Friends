import axios from 'axios';

export const getFriends = (friends) => {
	return dispatch => {
		dispatch({ type:'GETTING_FRIENDS' });
		axios.get('http://localhost:5000/api/friends')
			.then( ({data}) => {
			dispatch ({ type:'GOT_FRIENDS',payload:data });
			})
			.catch( err => {
			dispatch ({ type:'ERROR',payload:err });
			});
	};
};

export const addFriend = (friend) => {
  return (dispatch) => {
    dispatch({ type: 'ADDING_FRIENDS' });
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(
        ({ data }) =>
          dispatch({ type: 'FRIENDS_SAVED', payload: { name: friend.name, age: friend.age, email: friend.email } })
      )
      .catch((error) => {
        dispatch({ type: 'ERROR', msg: 'error saving friend' });
      });
  };
};
