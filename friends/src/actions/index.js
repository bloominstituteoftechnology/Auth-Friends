import axios from 'axios';
export const FETCHING='FETCHING';
export const FETCHED='FETCHED';
export const ERROR='ERROR';

export const getFriends=()=>{
    const request=axios.get(`http://localhost:5000/api/friends/`);
    return function (dispatch) {
        dispatch({type:'FETCHING'});
        request.then(data=>{
            dispatch({type: 'FETCHED',payload: data});
        }).catch(err=>{
            dispatch({type:'ERROR'})
        })
    }
}
