import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const SAVED_FRIEND = 'SAVED_FRIEND';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATED_FRIEND = 'UPDATED_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETED_FRIEND = 'DELETED_FRIEND';
export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/friends';
export const fetchFriends = () => {
    const promise = axios.get(`${URL}/get`);
    return (dispatch) => {
        dispatch({ FETCHING_FRIENDS });
        promise
            .then(res => {
                dispatch({ type: FRIEND_FETCHED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            })
    };
};

export const deleteFriend = id => {
    const promise = axios.delete(`${URL}/delete`, {
        data: {id}
    });
    return (dispatch) => {
        dispatch({ DELETING_FRIENDS });
        promise
        .then (({ data }) => {
            dispatch({ type: DELETED_FRIEND, payload: data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        })
}
}

export const saveFriend = friend => {
    const promise = axios.post(`${URL}/create`, friend);
    return dispatch => {
      dispatch({ type: CREATING_FRIEND });
      promise
        .then(({ data }) => {
          dispatch({ type: CREATE_FRIEND, payload: data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };
  