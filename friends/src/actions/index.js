import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

URL = 'http://localhost:5000/api/friends'
export const fetchData = () => dispatch => {
  dispatch({type: FETCHING_DATA});
  then_catch(axios.get(URL), dispatch)
}


export const addFriend = friend => dispatch => {
  then_catch(axios.post(URL, friend), dispatch)
} 

export const updateFriend = (id, friend) => dispatch => {
  then_catch(axios.put(`${URL}/${id}`, friend), dispatch)
}

export const deleteFriend = id => dispatch => {
  then_catch(axios.delete(`${URL}/${id}`), dispatch)
    
}

const then_catch = (promise, dispatch) => {
  promise
    .then(response => {
      dispatch({type: DATA_SUCCESS, results: response.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: DATA_ERROR, error: err})
    })
}