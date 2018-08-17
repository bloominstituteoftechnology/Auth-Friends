import axios from 'axios';
import { DELETE_FRIEND, DELETE_SUCCESS, DELETE_FAILURE } from "./types";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/friends'
});

export const delAction = (friend) => {
    return function(dispatch) {
      dispatch({ type: DELETE_FRIEND });
      axios.delete(instance/`${friend.id}`)       
        .then(function(response){
             dispatch({type: DELETE_SUCCESS, payload: response.data })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: DELETE_FAILURE, error});
        })
    }
}