import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADDING_FRIEND = 'ADDING_FRIEND'
export const CREATING_FRIEND = 'CREATING_FRIEND'
export const DELETE_FRIEND = 'DELETE_FRIEND'
export const DELETING_FRIEND = 'DELETING_FRIEND'

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axios 
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response)
            dispatch({ type: SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FAILURE, payload: error })
        })
}

export const addFriend = (id) => dispatch => {
    dispatch({ type: ADDING_FRIEND });
    axios  
        .put(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: CREATING_FRIEND, payload: response})
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FAILURE, payload: error })
        })
        
}

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND });
    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: DELETING_FRIEND, payload: response })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FAILURE, payload: error })
        })
}