import axios from 'axios';

export const getFriends = (friends) => {
	return dispatch => {
		dispatch({ type:'GETTING_FRIENDS' });
		axios.get(http://localhost:5000/);
			.then( ({data}) => {
			dispatch ({ type:'GOT_FRIENDS',payload:data.results });
			})
			.catch( err => {
			dispatch ({ type:'ERROR',payload:err });
			});
	};
};