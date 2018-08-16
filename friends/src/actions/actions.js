import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const ADDED_FRIENDS = 'ADDED_FRIENDS';
// export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
// export const UPDATED_FRIENDS = 'UPDATED_FRIENDS';
// export const DELETING_FRIENDS = 'DELETING_FRIENDS';
// export const DELETED_FRIENDS = 'DELETED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends');
    return function(dispatch){
        dispatch({type:FETCHING_FRIENDS});
        promise
            .then(({data}) => {
                dispatch({type: FETCHED_FRIENDS, payload: data});
            })
            .catch(err=>{
                dispatch({type: ERROR, payload: err});
            })
    }
}

export const addFriends = (name, age, email) => {
    const promise = axios.post('http://localhost:5000/api/friends', {
        name: name,
        age: age,
        email: email
    });
    return function(dispatch){
        dispatch({type:ADDING_FRIENDS});
        promise
            .then(response => {
                console.log(response.data)
                dispatch({type: ADDED_FRIENDS, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }

}