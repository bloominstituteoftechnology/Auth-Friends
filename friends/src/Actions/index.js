import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND'
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND_FAILURE'
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS'
export const DELETE_FRIEND = 'DELETE_FRIEND'
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE'
export const EDIT_FRIEND = 'EDIT_FRIEND'
export const EDIT_FRIEND_SUCCESS = 'EDIT_FRIEND_SUCCESS'
export const EDIT_FRIEND_FAILURE = 'EDIT_FRIEND_FAILURE'
export const FETCHING_FRIEND_BYID = 'FETCHING_FRIEND_BYID'
export const FETCHING_FRIEND_BYID_SUCCESS = 'FETCHING_FRIEND_BYID_SUCCESS';
export const FETCHING_FRIEND_BYID_FAILURE = 'FETCHING_FRIEND_BYID_FAILURE';


export const editFriend = (id,data) => dispatch => {
  dispatch({ type: EDIT_FRIEND });
  
  axios
    .put(`http://localhost:5000/api/friends/${id}`,data)
    .then(response => {
      dispatch({ type: EDIT_FRIEND_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: EDIT_FRIEND_FAILURE, payload: error });
  });  
}


export const deleteFriend = (id) => dispatch => {
  
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: error });
  });  
}

export const addingFriend = (data) => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post('http://localhost:5000/api/friends',data)
    .then(response => {

      dispatch({ type: ADDING_FRIEND_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: ADDING_FRIEND_FAILURE, payload: error });
  });
};

export const fetchFriends = () => dispatch => {

    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {

        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

export const fetchFriendById = (id) => dispatch => {
  dispatch({ type: FETCHING_FRIEND_BYID });
  axios
    .get(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log('resonse from teh server.. ',response)
      dispatch({ type: FETCHING_FRIEND_BYID_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIEND_BYID_FAILURE, payload: error });
  });
};


