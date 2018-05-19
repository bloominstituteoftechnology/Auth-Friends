import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';


export function fetchFriends() {
  const promise = axios.get(`http://localhost:5000/api/friends`);
  return(dispatch) => {
    dispatch ({ type: FETCHING });
    promise
       .then(response => {
         dispatch({ type: FETCHED, payload: response.data });
       })
       .catch(error => {
          dispatch({ type: ERROR, payload: error });
       });
    };
};

export const createFriend = (friend) => {
  const promise = axios.post(`http://localhost:5000/api/friends`, friend);
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
	dispatch({type: FETCHED, payload: response.data });
      })
      .catch(error => {
	dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteFriend = id => {
  const promise = axios.post(`http://localhost:5000/api/friends/${id}`);
  return dispatch => {
    dispatch({ type: DELETING });
    promise
      .then(response => {
	dispatch(fetchFriends());
      })
      .catch(error => {
	dispatch({ type: ERROR, payload: error });
      });
  };
};
// After I got my Smurfs project working this afternoon, I decided to try and make this Friends project work the same way. So this code is virtually identical to the Smurfs code, except I'm using friends instead.
