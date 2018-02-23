import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_FRIEND = 'GET_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const TOOGLE_UPDATE_FRIEND = 'TOOGLE_UPDATE_FRIEND';

const URL = 'http://localhost:5000/api/friends';

export const getFriend = (id) => {
	const friends = axios.get('http://localhost:5000/friends');
	return dispatch => {
		dispatch({ type: GET_FRIEND });
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
 const deleteFriend = axios.delete(`http://localhost:5000/friends/${id}`, {
   data: { id }
	});
	  return dispatch => {
		 dispatch({ type: DELETE_FRIEND });
     deleteFriend
			.then(({ data }) => {
			dispatch({ 		
        type: 'DELETE_FRIEND',
			  payload: data
		   });
	  })
			.catch(error => {
			 dispatch({ 
         type: ERROR,
				 payload: error
	  		});	 
     });
  };
}

export const toggleUpdateFriend = friend => {
 return {
    type: TOOGLE_UPDATE_FRIEND
   };
};

export const UpdateFriend = friend => {
  return {
    type: UPDATE_FRIEND,
		payload: friend
	};
};


