import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING });

        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({ type: FETCHED, payload: res.data })
            })
            .catch(err =>
                dispatch({
                    type: ERROR,
                    error: err
                }));
    }
}