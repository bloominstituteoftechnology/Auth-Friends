import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING_FRIEND = "SAVING_FRIEND";
export const SAVE_FRIEND = "SAVE_FRIEND";

const url = "http://localhost:5000/api/friends";
export const fetchFriends = () => {
    const friendData = axios.get(url);
    return function(dispatch) {
        dispatch({ type: FETCHING });
        friendData.then(({data}) => {
            console.log(data)
            dispatch({type: FETCHED, payload: data});
        })
        .catch(error => {
            dispatch({type: ERROR})
        })
    }
}

export const createFriend = friend => {
    const newFriend = axios.post(url, friend);
    return dispatch => {
      dispatch({ type: SAVING_FRIEND });
      newFriend
        .then(({ data }) => {
          dispatch({ type: SAVE_FRIEND, payload: data });
        })
        .catch(error => {
          dispatch({ type: ERROR, payload: error });
        });
    };
  };