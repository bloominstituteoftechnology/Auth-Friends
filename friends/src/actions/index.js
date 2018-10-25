import axios from 'axios'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS'
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE'

export const ADD_FRIEND = 'ADD_FRIEND'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE'

export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE'



export const fetchFriends = () => dispatch => {
    
    dispatch({type: FETCHING_FRIENDS})
    axios
    .get('http://localhost:5000/api/friends/')
    .then(response => {
        console.log(response.data)
        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: FETCHING_FRIENDS_FAILURE, payload: error})
    })

}

export const addNewFriend = friends => dispatch => {
dispatch({type: ADD_FRIEND})
axios
.post('http://localhost:5000/api/friends/', friends)
.then(response => {
    console.log(response.data)
    dispatch({type: ADD_FRIEND_SUCCESS, payload: response.data})

})
.catch(error => {
    dispatch({ type: ADD_FRIEND_FAILURE, payload: error})
})
}

export const deleteFriend = id => dispatch => {
    axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
        dispatch({type: DELETE_FRIEND_SUCCESS, payload: response.data})
    })
    .catch(err => dispatch({type: DELETE_FRIEND_FAILURE, payload: err}))
}