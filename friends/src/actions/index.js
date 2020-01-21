import axios from 'axios';

export const pushInfo = friends => {
  return dispatch => {
    dispatch({ type: 'START_PUSHING' });
    axios
      .post('http://localhost:4000/api/friends', friends)
      .then(response =>
        dispatch({ type: 'PUSH_SUCCESS', payload: response.data })
      )
      .catch(error =>
        dispatch({ type: 'PUSH_FAILURE', payload: error.response })
      );
  };
};
