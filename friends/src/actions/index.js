import axios from 'axios';

export const SAVING_FRIEND = 'SAVING_FRIEND';
export const SAVED_FRIEND = 'SAVED_FRIEND';

export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATED_FRIEND = 'UPDATED_FRIEND';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETED_FRIEND = 'DELETED_FRIEND';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';

export const ERROR = 'ERROR';


export const fetching = () => {
    return {
        type: FETCHING_FRIENDS,
    };
};

export const saving = () => {
    return {
        type: SAVING_FRIEND,
    };
};

export const updating = () => {
    return {
        type: UPDATING_FRIEND,
    };
};

export const deleting = (id) => {
    return {
        type: DELETING_FRIEND,
    };
}



export const fetched = () => {
    const request = axios.get('http://localhost:5000/api/friends/')
    return (dispatch) => {
        dispatch({ type: FETCHING_FRIENDS });
        request
            .then(data => {
                dispatch({
                    type: FETCHED_FRIENDS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err,
                })
            })
    }
}

export const deleted = (id) => {
    console.log("action del", id)
    const request = axios.delete(`http://localhost:5000/api/friends/${id}`);
    return (dispatch) => {
        dispatch({ type: DELETING_FRIEND });
        request
            .then(data => {
                console.log("data", data)
                dispatch({
                    type: DELETED_FRIEND,
                    payload: data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err,
                })
            })
    }
};

export const added = (values) => {
    const request = axios.post('http://localhost:5000/api/friends', values)
    return (dispatch) => {
        dispatch({ type: SAVING_FRIEND })
        request
            .then((data) => {
                console.log("data", data)
                dispatch({
                    type: SAVED_FRIEND,
                    payload: data.data
                })
            })
            .catch(err => console.log(err));
    }
}

export const updated = (Obj, id) => {
    const request = axios.put(`http://localhost:5000/api/friends/${id}`, Obj)
    return (dispatch) => {
        dispatch({ type: UPDATING_FRIEND })
        request
            .then((data) => {
                console.log("data", data)
                dispatch({
                    type: UPDATED_FRIEND,
                    payload: data.data
                })
            })
            .catch(err => console.log(err));
    }
}

// const mapStateToProps = (state) => ( mapStateToProps, null }(updated)