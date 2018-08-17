import axios from 'axios'
import { UPDATING_FRIEND, UPDATED_FRIEND, ERROR } from './types'

export const updateFriend = (id, friend) => {
    const request = axios.put(`http://localhost:5000/api/friends/${id}`, friend)
    return (dispatch) => {
        request.then(({data})=> {
            dispatch({type: UPDATING_FRIEND, payload: data})
        })
        .then(()=>{
            dispatch({type: UPDATED_FRIEND})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        });
    };
};