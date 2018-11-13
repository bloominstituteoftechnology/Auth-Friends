import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDED_FRIEND = 'ADDED_FRIEND';

export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETED_FRIEND = "DELETED_FRIEND";

export const getFriends = () => {
    return dispatch => {
           dispatch({type: LOADING});
           axios.get('http://localhost:5000/api/friends')
                .then( response => {
                //   console.log(response.data);
                   dispatch({type:SUCCESS, payload: response.data})
                })
                .catch( error => {
                    dispatch({type: ERROR, payload: error})
                })

    }
}

export const addFriends  = (newFriend) => {
     return (dispatch) => {
            dispatch({type: ADDING_FRIEND});
            axios.post('http://localhost:5000/api/friends', newFriend)
            .then( response => {
                console.log(response.data);
                 dispatch({type:ADDED_FRIEND, payload: response.data})
              })
              .catch( error => {
                  dispatch({type: ERROR, payload: error})
              })

     }
}

export const deleteFriend = (id) => {
    return (dispatch) => {
           dispatch({type: DELETING_FRIEND});
           axios.delete(`http://localhost:5000/api/friends/${id}`)
           .then( response => {
               console.log(response.data);
                dispatch({type:DELETED_FRIEND, payload: response.data})
             })
             .catch( error => {
                 dispatch({type: ERROR, payload: error})
             })

    }
}