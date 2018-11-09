import axios from 'axios';
export const GET_FRIENDS = "GET_FRIENDS"


export const getFriends = () =>{
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000/api/friends')
      .then(response => {
        console.log(response)
        dispatch({type: GET_FRIENDS, friends: response.data})
      })
      .catch (err => {
        dispatch({type: ERROR, errorMessage:'Trouble Retrieving Your Friends'})
      })
  }
}