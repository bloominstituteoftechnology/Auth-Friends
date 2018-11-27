import axios from 'axios';
import thunk from 'redux-thunk';

export const FETCHING = 'FETCHING'; //
export const FETCHED = 'FETCHED'; //
export const ERROR = 'ERROR'; //
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';

export const getFriends = () => dispatch => {
	dispatch({ type: FETCHING });
	axios
		.get('http://localhost:5000/api/friends')
		.then(response => {
			dispatch({ type: FETCHED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'got an error' });
		});
};

export const addFriend = data => dispatch => {
	dispatch({ type: SAVING });
	axios
		.post('http://localhost:5000/api/friends', {
			name: data.name,
			age: data.age,
			email: data.email
		})
		.then(response => {
			console.log('response=' + response.data);
			dispatch({ type: SAVED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'addFriend got an error' });
		});
};

export const updateFriend = data => dispatch => {
	dispatch({ type: UPDATING });
	axios
		.put(`http://localhost:5000/api/friends/${data.id}`, {
			id: data.id,
			name: data.name,
			email: data.email
		})
		.then(response => {
			console.log('response=' + response.data);
			dispatch({ type: UPDATED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'updateFriend got an error' });
		});
};

export const deleteFriend = data => dispatch => {
	console.log('delete activated');
	dispatch({ type: DELETING });
	axios
		.delete(`http://localhost:5000/api/friends/${data.id}`)
		.then(response => {
			dispatch({ type: DELETED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'delete got an error' });
		});
};
