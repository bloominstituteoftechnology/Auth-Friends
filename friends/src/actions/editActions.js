import axios from 'axios';
import { EDIT_FRIEND,EDIT_SUCCESS,EDIT_FAILURE } from "./types";

// const instance = axios.create({
//     baseURL: 'http://localhost:5000/api/friends'
// });

export const editAction = () => {
    return function(dispatch) {
      dispatch({ type: EDIT_FRIEND });
    //   axios.put(instance/`${friend.id}`)       
    //     .then(function(response){
    //          dispatch({type: EDIT_SUCCESS, payload: response.data })
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //         dispatch({type: EDIT_FAILURE, error});
    //     })
    }
}