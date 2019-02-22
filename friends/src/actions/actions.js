import axios from 'axios';
// Import axios to obtain data from data feed
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const ADD = 'ADD';
export const ADDSUC = 'ADDSUC'
export const DEL = 'DEL';
export const DELSUC = 'DELSUC';

export const frinData = () => dispatch =>{
  dispatch ({type: FETCH})
  axios 
  .get ('`http://localhost:5000/api/friends`')
  .then (res => {
    dispatch ({
      type: SUCCESS,
      payload: res.data
    })
  })
  .catch (error => {
    dispatch({
    type: FAIL,
    payload:error
  })
  });
}

export const addfrin = (newfrin) => dispatch => {
  dispatch({type: ADD})
  axios.post('http//localhost:5000/api/friends',newfrin)
  .then(resp => {
    dispatch({ type: ADDSUC, payload: Response.data})
  })
  .catch(error => {
    console.log (error)
  })
}

export const delFrin = (id) => dispatch => {
  dispatch({ type: DEL })
  axios.delete(`http://localhost:5000/api/friends/${id}`)
  .then(response => {
      dispatch({ type: DELSUC, payload: response.data})
  })
  .catch(error => {
      console.log(error)
      dispatch({ type: FAIL, payload: error})
  })
}

export const upfrin = (newfrin) => dispatch => {
  axios.put('http://localhost:5000/api/friends', newfrin)
  .then(response => {
    dispatch({type: ADDSUC, payload:response.data})
  })
  .catch(error =>{
    console.log(error)
  })
}