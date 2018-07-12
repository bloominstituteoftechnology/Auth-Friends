import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SAVING_FRIEND = 'SAVING_FRIEND'

const url = `http://localhost:5000/api/friends`;

export const fetchingData = () => {
    return dispatch => {
        dispatch({type:FETCHING});
        axios
        .get(url)
        .then(response => {
            dispatch({type:FETCHED, payload: response.data});
        })
        .catch(error => {
            dispatch({type:ERROR, payload: 'A wild Error appeared!'});
        });
    };
};

export const saveFriend = friend => {
    return(dispatch) => {
        dispatch({type:SAVING_FRIEND})
        axios
        .post(url, friend)
        .then(response => {
            dispatch(fetchingData());
        })
        .catch(error => {
            dispatch({type:ERROR, payload: 'A wild Error appeared! You cannot post that!'});
        });
    }
}