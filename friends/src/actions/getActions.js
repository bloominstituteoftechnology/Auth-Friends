import axios from 'axios';
import { GET_FRIENDS, GET_SUCCESS, GET_FAILURE  } from "./types";

const url = 'http://localhost:5000/api/friends';

export const getAction = () => {
    return function(dispatch) {
      dispatch({ type: GET_FRIENDS });
      axios.get(url)
        .then(function(response){
             dispatch({type: GET_SUCCESS, payload: response.data })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: GET_FAILURE, error});
        })
    }
}