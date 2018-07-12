import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/friends/';

export const fetchReq = () => {
    return (dispatch) => {
        dispatch({type: FETCHING});
        axios.get(URL)
        .then(({data}) => {
            console.log(data);
            dispatch({type: FETCHED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};