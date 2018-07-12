import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


const fetching = () => {
    return {
        type: FETCHING
    };
}

const fetched = (data) => {
    return {
        type: FETCHED,
        payload: data
    }
}

const errors = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

export const fetchData = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch(fetching());
        getFriends
            .then( res => {
                dispatch(fetched(res.data.results));
            })
            .catch( err => {
                dispatch(errors(err));
            })
    }
}


