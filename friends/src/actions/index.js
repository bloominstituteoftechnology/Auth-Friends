import axios from 'axios';

URL = 'http://localhost:5000/api/friends'
export const fetchData = () => dispatch => {
  dispatch({type: 'FETCHING_DATA'});
  axios
    .get(URL)
    .then(response => {
      dispatch({ type: 'DATA_*_SUCCESS', results: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: 'DATA_*_ERROR', error: err })
    })
}


export const addFriend = friend => dispatch => {
  dispatch({type: 'POST_DATA'})
  axios
    .post(URL, friend)
    .then(response => {
      dispatch({type: 'DATA_*_SUCCESS', results: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({type: 'DATA_*_ERROR', error: err})
    })
} 

export const updateFriend = (id, friend) => dispatch => {
  dispatch({type: 'UPDATE_DATA'})
  axios
    .put(`${URL}/${id}`, friend)
    .then(response => {
      dispatch({type: 'DATA_*_SUCCESS', results: response.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: 'DATA_*_ERROR', error: err})
    })
}

export const deleteFriend = id => dispatch => {
  dispatch({type: 'DELETE_DATA'})
  axios 
    .delete(`${URL}/${id}`)
    .then(response => {
      dispatch({type: 'DATA_*_SUCCESS', results: response.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: 'DATA_*_ERROR', error: err})
    })
}