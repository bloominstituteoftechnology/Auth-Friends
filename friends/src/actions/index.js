import axios from 'axios';

export const ERROR = 'ERROR';
export const LOAD_FRIENDS = 'LOAD_FRIENDS';
export const LOADING_FRIENDS = 'LOADING_FRIENDS';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const CREATE_FRIEND = 'CREATE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const SINGLE_FRIEND = 'SINGLE_FRIEND';
export const TOGGLE_UPDATE_FRIEND = 'TOGGLE_UPDATE_FRIEND';


export const loadFriends = () => {
    const friends = axios.get("http://localhost:5000/api/friends");
    return dispatch => {
      dispatch({ type: LOADING_FRIENDS });
      friends
        .then(response => {
          dispatch({ type: LOAD_FRIENDS, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };

export const createFriend = friend => {
    const newFriend = axios.post("http://localhost:5000/api/friends", friend);
    return dispatch => {
      dispatch({ type: CREATING_FRIEND });
      newFriend
        .then(({ data }) => {
          dispatch({ type: CREATE_FRIEND, payload: data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };

  export const deleteFriend = id => {
    const deletedFriend = axios.delete(`http://localhost:5000/api/friends/${id}`, {
      data: { id }
    });
    return dispatch => {
      dispatch({ type: DELETING_FRIEND });
      deletedFriend
        .then(({ data }) => {
          dispatch({ type: DELETE_FRIEND, payload: data });
          dispatch({ type: SINGLE_FRIEND, payload: {} });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };

  export const toggleShowUpdate = () => {
      return {
          type: TOGGLE_UPDATE_FRIEND
      };
  };

  export const updateSingleFriend = friend => {
      return {
          type: SINGLE_FRIEND,
          payload: friend
      };
  };

  export const updateFriend =(updatedFriend) => {
    return dispatch => {
        dispatch({type: LOADING_FRIENDS })
        axios
          .put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
          .then(response => {
            console.log(response.data);
              dispatch({ type: LOAD_FRIENDS, payload: response.data });
          })
          .catch(err => {
            dispatch({
              type: ERROR,
              errorMessage: "Async error updateing friend"
            });
          });
    }
  }