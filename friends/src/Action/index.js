import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';

const URL = 'http://localhost:5000/api/friends/';

export const fetchFriends = () => (dispatch) => {
	dispatch({ type: FETCHING_FRIENDS });
	axios
		.get(`${URL}`)
		.then((res) => {
			dispatch({ type: FRIENDS_FETCHED, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: err });
		});
};

export const addFriend = (friend) => {
	const newFriend = axios.post(`${URL}`, friend);
	return (dispatch) => {
		dispatch({ type: ADD_FRIEND });
		newFriend
			.then(({ data }) => {
				dispatch({ type: ADD_FRIEND, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ERROR, payload: err });
			});
	};
};

// export const update = (editedFriend) => (dispatch) => {
// 	dispatch({ type: UPDATING });
// 	axios
// 		.put(`http://localhost:5000/api/friends/${editedFriend.id}`, editedFriend)
// 		.then((res) => {
// 			dispatch({ type: UPDATED, payload: res.data });
// 		})
// 		.catch((err) => {
// 			dispatch({ type: ERROR, payload: err });
// 		});
// };
