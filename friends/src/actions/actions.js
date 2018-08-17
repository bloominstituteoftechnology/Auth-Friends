import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const FRIEND_DELETED = 'FRIENDS_DELETED';





const URL = 'http://localhost:5000/api/friends/';

export const getFriends = () => {
    const Friends = axios.get(URL);
    return (dispatch) => {
        dispatch({type: FETCHING_FRIENDS});
        Friends
            .then(data => {
                console.log(data)
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: data.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                });
            });
    };
};

export const addFriend = (newFriend) => {
    const request = axios.post(URL, newFriend);
    return (dispatch) => {
      request
        .then(data => dispatch({
          type: FRIENDS_SAVED,
          payload: data.data
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error,
          })
        });
    }
  };
  
export const deleteFriend = (id) => {
    const request = axios.delete(`${URL}${id}`);
    return (dispatch) => {
      request
        .then(data => dispatch({
          type: FRIEND_DELETED,
          payload: data.data
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error
          })
        });
    }
  }
