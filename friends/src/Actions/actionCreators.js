import axios from 'axios'

import {LOADING, SUCCESS, ERROR} from './actionTypes'

/**************fetchFriends Action Creator****************/
export const fetchFriends = () =>{
    return (dispatch) =>{
        dispatch({type: LOADING})
        axios.get('http://localhost:5000/api/friends')
            .then((response) => {
                dispatch({type: SUCCESS, payload: response.data})
            })
            .catch(err =>{
                dispatch({type: ERROR, payload: "Unable to retrieve Friends data"})
            })
    }
}

/**************createFriend Action Creator****************/
export const createFriend = (newFriend) =>{
    return (dispatch) =>{
        dispatch({type: LOADING})
        axios.post('http://localhost:5000/api/friends', newFriend)
            .then((response) => {
                dispatch({type: SUCCESS, payload: response.data})
            })
            .catch(err =>{
                dispatch({type: ERROR, payload: "Unable to create friend"})
            })
    }
}


