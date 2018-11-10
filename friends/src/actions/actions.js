import axios from 'axios';

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const fetchFriends = () =>{
    return dispatch=>{
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/api/friends')
            .then(response =>{
                dispatch({ type:SUCCESS, payload: response.data })
            })
            .catch(err =>{
                dispatch({ type: FAILURE, payload: "cannot reach friends data"})
            })
    }
}

export const addFriend = (newFriend) =>{
    return dispatch=>{
        dispatch({ type: LOADING });
        axios
            .post('http://localhost:5000/api/friends', newFriend )
            .then(response =>{
                dispatch({ type: SUCCESS, payload: response.data})
            })
            .catch(err =>{
                dispatch({ type: FAILURE, payload: `Error adding that friend`})
            })
    }
}

export const updateFriend = (id) =>{
    return dispatch=>{

    }
}