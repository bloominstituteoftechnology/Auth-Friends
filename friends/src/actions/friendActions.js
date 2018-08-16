import axios from 'axios'
import { FETCH_FRIENDS, FETCHED_FRIENDS, ERROR } from './types'


export const fetchFriends = () => {
    const request = axios.get(`http://localhost:5000/api/friends`)
    return (dispatch) => {
        request.then(({data})=> {
            dispatch({type: FETCH_FRIENDS, payload: data})
        })
        .then(()=>{
            dispatch({type: FETCHED_FRIENDS})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        });
    };
};