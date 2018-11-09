// we'll need axios
import axios from 'axios';
export const FETCHED_INFO = "FETCHED_INFO";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const ADDFRIEND="ADDFRIEND";
export const DELETEFRIEND="DELETEFRIEND";
export const UPDATEFRIEND = "UPDATEFRIEND"

export const getinfo = () => {

    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
                console.log(response)
                dispatch({
                    type: FETCHED_INFO,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};
export const addfriend = (newfriend) => {

    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .post('http://localhost:5000/api/friends', newfriend)
            .then(response => {
                console.log(response)
                dispatch({
                    type: ADDFRIEND,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};

export const deletefriend = (id) => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios.delete(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                dispatch({ type: DELETEFRIEND, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })

    }
}

export const updatefriend = (id,friend) => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios.put(`http://localhost:5000/api/friends/${id}`,friend)
            .then(response => {
                dispatch({ type: UPDATEFRIEND, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })

    }
}