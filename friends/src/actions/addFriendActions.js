import axios from 'axios'
import { SAVE_FRIENDS, SAVED_FRIENDS, ERROR } from './types'

export const addFriend = friend => {
    const request = axios.post(`http://localhost:5000/api/friends`, friend)
    return (dispatch) => {
        request.then(({data})=> {
            dispatch({type: SAVE_FRIENDS, payload: data})
        })
        .then(()=>{
            dispatch({type: SAVED_FRIENDS})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        });
    };
};