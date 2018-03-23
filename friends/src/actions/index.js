import axios from 'axios';

export const GET_FRIEND = 'GET_FRIEND';
export const GOT_FRIEND = 'GOT_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ADDED_FRIEND = 'ADDED_FRIEND';
// export const DELETE_FRIEND = 'DELETE_FRIEND';
export const ERROR = 'ERROR';

export const getFriends = () => (dispatch) => {
	dispatch({ type: GET_FRIEND });
	axios
		.get(`http://localhost:5000/api/friends`)
		.then((response) => {
			console.log(response);
			dispatch({ type: GOT_FRIEND, friends: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You didn't get any friends" });
		});
}; 
  
export const addFriend = (friend) => (dispatch) => {
  dispatch({ type: GET_FRIEND });
  axios
    .post(`http://localhost:5000/api/friends`, friend)
    .then((response)=> {
      dispatch({ type: ADD_FRIEND, friends: response.data});
    })
    .catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You didnt add any friends" });
		});

}