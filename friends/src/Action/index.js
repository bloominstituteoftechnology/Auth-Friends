import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';

export const fetchFriends = () => (dispatch) => {
	dispatch({ type: FETCHING_FRIENDS });
	axios
		.get('http://localhost:5000/api/friends/')
		.then((res) => {
			dispatch({ type: FRIENDS_FETCHED, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: err });
		});
};

export const addFriend = () => (dispatch) => {
	axios
		.post('http://localhost:5000/api/friends/', addFriend)
		.then((res) => {
			console.log('add friends:', res.data);
			dispatch({
				type: ADD_FRIEND,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: err
			});
		});
};

export const update = (editedFriend) => (dispatch) => {
	dispatch({ type: UPDATING });
	axios
		.put(`http://localhost:5000/api/friends/${editedFriend.id}`, editedFriend)
		.then((res) => {
			dispatch({ type: UPDATED, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: err });
		});
};
