import axios from 'axios'
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ERROR = 'ERROR';

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