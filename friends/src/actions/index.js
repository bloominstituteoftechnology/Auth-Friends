import axios from 'axios'


export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const ERROR = 'ERROR';

export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS ='SAVING_FRIENDS';



export const add = friend =>{
    return dispatch => {
        dispatch({ type: SAVING_FRIENDS });

        axios.post(`http://localhost:5000/api/friends`, friend)
            .then(res => {
                dispatch({
                    type: FRIENDS_SAVED,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: 'error fetching data', })
            })
    }
}

export const fetch = friend =>{
    return dispatch =>{
        dispatch({type: FETCHING_FRIENDS});

        axios.get(`http://localhost:5000/api/friends`)
        .then(res=>{
            dispatch({
                type: FRIENDS_FETCHED,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({type: ERROR, payload: 'error fetching data',})
        })
    }
}