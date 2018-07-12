import axios from 'axios';

export const FETCHING = ' FETCHING';
export const FETCHED = ' FETCHED';
export const ERROR = ' ERROR';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING });
        axios.get(`http://localhost:5000/api/friends`)
            .then(response => {
                dispatch({ type: FETCHED, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: `Error Fetching Data: ${error}`})
            })
    }
}
