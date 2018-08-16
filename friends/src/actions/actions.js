import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const FRIENDS_UPDATED = 'FRIENDS_UPDATED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIEND_DELETED = 'FRIEND_DELETED';


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

export const addFriend = (friend) => {
    const request = axios.post(URL, friend);
    return (dispatch) => {
      request
        .then(data => dispatch({
          type: FRIENDS_SAVED,
          payload: {
              name: friend.name,
              age: friend.age,
              email: friend.email
          }
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error,
          })
        });
    }
  };

export const updateFriend = (id, updatedFriend) => {
    const request = axios.put(`{URL}${id}`, updatedFriend);
    return (dispatch) => {
      request
        .then(data => dispatch({
          type: FRIENDS_UPDATED,
          payload: data.data,
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
    const request = axios.delete(`{URL}${id}`);
    return (dispatch) => {
      request
        .then(data => dispatch({
          type: FRIEND_DELETED,
          payload: data.data,
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error,
          })
        });
    }
  }
