import axios from 'axios';

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";

export const fetchData = () => dispatch => {
    dispatch({ type: LOADING});
    axios.get('http://localhost:5000/api/friends')
      .then(res => dispatch({ type: SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FAILED, payload: err }))
};

export const addFriend = (friend) => dispatch => {
    console.log('From update Friends')
    dispatch({ type: LOADING});
    axios.post("http://localhost:5000/api/friends", friend)
        .then(res => dispatch({ type: SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FAILED, payload: err}))
}