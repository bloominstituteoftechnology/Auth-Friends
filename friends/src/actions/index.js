import axios from 'axios'

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


export const fetchFriends = () => {
    return dispatch => {
      dispatch({ type: FETCHING });
      axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
          dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR });
        });
    };
  };