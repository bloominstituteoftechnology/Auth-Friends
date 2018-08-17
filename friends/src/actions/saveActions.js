import axios from 'axios';
import { SAVE_FRIENDS,SAVE_SUCCESS,SAVE_FAILURE } from "./types";

const url = 'http://localhost:5000/api/friends';


export const saveAction = (friend) => {
    // console.log(`${url}/${friend.id}`);
    return function(dispatch) {
      dispatch({ type: SAVE_FRIENDS });
      axios.put(`${url}/${friend.id}`, `${friend.id}`, {
          name: friend.name,
          age: friend.age,
          email: friend.email          
      })
        .then(function(response){
            console.log(response);
             dispatch({type: SAVE_SUCCESS, payload: response.data })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: SAVE_FAILURE, error});
        })
    }
}