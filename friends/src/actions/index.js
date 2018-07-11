import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const url = `http://localhost:5000`;

export const fetchingData = () => {
    return dispatch => {
        dispatch({type:FETCHING});
        axios
        .get(url)
        .thenk(({data}) => {
            dispatch({type:FETCHED, payload: data.friends});
        })
        .catch(error => {
            dispatch({type:ERROR, payload:error});
        });
    };
};