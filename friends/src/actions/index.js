import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const url = `http://localhost:5000/api/friends`;

export const fetchingData = () => {
    return dispatch => {
        dispatch({type:FETCHING});
        axios
        .get(url)
        .then(({data}) => {
            dispatch({type:FETCHED, payload: data});
        })
        .catch(error => {
            dispatch({type:ERROR, payload:error});
        });
    };
};