import axios from 'axios';

export const START_ACTION = 'START_ACTION';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const FRIENDS_RECEIVED_FINISH = 'FRIENDS_RECEIVED_FINISH';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESSFUL = 'ADDING_FRIEND_SUCCESSFUL';
export const ADDING_FRIEND_FINISH = 'ADDING_FRIEND_FINISH';
export const ERROR_ADDING_FRIEND = 'ERROR_ADDING_FRIEND';

export const EDITING_FRIEND = 'EDITING_FRIEND';
export const EDITING_FRIEND_SUCCESSFUL = 'EDITING_FRIEND_SUCCESSFUL';
export const EDITING_FRIEND_FINISH = 'EDITING_FRIEND_FINISH';
export const ERROR_EDITING_FRIEND = 'ERROR_EDITING_FRIEND';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETING_FRIEND_SUCCESSFUL = 'DELETING_FRIEND_SUCCESSFUL';
export const DELETING_FRIEND_FINISH = 'DELETING_FRIEND_FINISH';
export const ERROR_DELETING_FRIEND = 'ERROR_DELETING_FRIEND';

export const getFriends = _ => {
	const friends = axios.get('http://localhost:5000/api/friends/get');
	return dispatch => {
		dispatch({ type: START_ACTION });
		dispatch({ type: FETCHING_FRIENDS });
		setTimeout(_ => {
			friends
				.then(({ data }) => {
					dispatch({ type: FRIENDS_RECEIVED, payload: data });
					dispatch({ type: FRIENDS_RECEIVED_FINISH });
				})
				.catch(err => {
					dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
				});
		}, 1500);
	};
};

export const addFriend = newFriend => {
	const friends = axios.post(
		'http://localhost:5000/api/friends/create',
		newFriend
	);
	return dispatch => {
		dispatch({ type: START_ACTION });

		dispatch({ type: ADDING_FRIEND });
		setTimeout(_ => {
			friends
				.then(({ data }) => {
					dispatch({ type: ADDING_FRIEND_SUCCESSFUL, payload: data });
					dispatch({ type: ADDING_FRIEND_FINISH });
				})
				.catch(err => {
					dispatch({ type: ERROR_ADDING_FRIEND, payload: err });
				});
		}, 1500);
	};
};

export const editFriend = (friend, ofFriend) => {
	const friends = axios.put('http://localhost:5000/api/friends/update', {
		update: friend,
		index: ofFriend,
	});
	return dispatch => {
		dispatch({ type: START_ACTION });

		dispatch({ type: EDITING_FRIEND });
		setTimeout(_ => {
			friends
				.then(({ data }) => {
					dispatch({ type: EDITING_FRIEND_SUCCESSFUL, payload: data });
					dispatch({ type: EDITING_FRIEND_FINISH });
				})
				.catch(err => {
					dispatch({ type: ERROR_EDITING_FRIEND, payload: err });
				});
		}, 1500);
	};
};

export const deleteFriend = ofFriend => {
	const friends = axios.delete('http://localhost:5000/api/friends/delete', {
		data: { index: ofFriend },
	});
	return dispatch => {
		dispatch({ type: START_ACTION });

		dispatch({ type: DELETING_FRIEND });
		setTimeout(_ => {
			friends
				.then(({ data }) => {
					dispatch({ type: DELETING_FRIEND_SUCCESSFUL, payload: data });
					dispatch({ type: DELETING_FRIEND_FINISH });
				})
				.catch(err => {
					dispatch({ type: ERROR_DELETING_FRIEND, payload: err });
				});
		}, 1500);
	};
};
