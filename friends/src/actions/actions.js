import axios from 'axios';
// Import axios to obtain data from data feed
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
//Assign actions a name while exporting them. Naming convention is pretty straight forward as to what they do. 
export const frinData = () => dispatch =>{
  dispatch ({type: FETCH})
  axios 
  .get ('')
  .then (res => {
    dispatch ({
      type: SUCCESS,
      payload: res.data.results
    })
  })
  .catch (error => {
    dispatch({
    type: FAIL,
    payload:'Cant find any friends for you'
  })
  });
}