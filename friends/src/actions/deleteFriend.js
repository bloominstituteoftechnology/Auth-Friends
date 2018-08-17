import { DELETING_FRIEND, DELETED_FRIEND, ERROR } from './types'
import axios from 'axios'

export const deleteFriend = id => {    
    const request = axios.delete(`http://localhost:5000/api/friends/${id}`)
    return (dispatch) => {
        request.then(({data})=> {
            dispatch({type: DELETING_FRIEND, payload: data})
        })
        .then(()=>{
            dispatch({type: DELETED_FRIEND})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        })
    }
 }