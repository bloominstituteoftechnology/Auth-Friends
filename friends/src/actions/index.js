import axios from 'axios';

export const ERROR = 'ERROR';
export const CREATE_FRIEND = 'CREATE_FRIEND';
export const GET_FRIEND = 'GET_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const SINGLE_FRIEND = 'SINGLE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const TOOGLE_UPDATE_FRIEND = 'TOOGLE_UPDATE_FRIEND';

//const URL = 'http://localhost:5000/api/friends';

export const createFriend = friend => {
	const createFriend = axios.post('http://localhost:5000/api/friends/create', friend);
	return dispatch => {
	  createFriend
     .then(({ data }) => {
				 dispatch({ type: CREATE_FRIEND, payload: data });
			})
		 .catch(error => {
				 dispatch({
				  type: ERROR,
					payload: error
		    });
		 });
  };
}
export const getFriend = () => {
	const friends = axios.get('http://localhost:5000/api/friends/get');
	return dispatch => {
		friends
		 .then(response => {
		 dispatch({		 
     type: 'GET_FRIEND',
		 payload: response.data 
	});
	})
	  .catch(error => {
			dispatch({ 
       type: ERROR,
			 payload: error 
     });
		});
  }
}

export const deleteFriend = id => {
 const deleteFriend = axios.delete('http://localhost:5000/api/friends/delete', {
   data: { id }
	});
	  return dispatch => {
     deleteFriend
			.then(({ data }) => {
			dispatch({ 		
        type: 'DELETE_FRIEND',
			  payload: data
		   });
			dispatch({
        type: 'SINGLE_FRIEND',
				payload: {} });
	  })
			.catch(error => {
			 dispatch({ 
         type: ERROR,
				 payload: error
	  		});	 
     });
  };
}

export const toggleUpdateFriend = () => {
 return {
    type: TOOGLE_UPDATE_FRIEND
   };
};

export const updateFriend = friend => {
  return {
    type: SINGLE_FRIEND,
		payload: friend
	};
};
