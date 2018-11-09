import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetch = () => {
  const reduxFriends = axios.get('https://localhost:5000/api/friends');

  return dispatch => {
    dispatch({type: FETCHING});

    reduxFriends
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS, payload: response.data.results});
      })
      .catch(err => {

        dispatch({
          type: FAILURE,
          payload: 'reduxFriends failed to resolve'
        });
    });


  };

};