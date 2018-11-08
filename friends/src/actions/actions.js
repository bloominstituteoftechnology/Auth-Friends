import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetchFriends = ()=>{
    return (dispatch)=>{
        dispatch({type: FETCHING})
        axios.get('http://localhost:5000/api/friends')
        .then((response)=>{
            dispatch({
                type: SUCCESS,
                friends: response.data
            });
        })
        .catch((error)=>{
            dispatch({
                type: ERROR,
                errorMessage: error
            });
        })
    }
}

export const addFriend = (friend)=>{
    return (dispatch)=>{
        dispatch({type: FETCHING});
        axios.post('http://localhost:5000/api/friends', friend)
        .then((response)=>{
            dispatch({
                type: SUCCESS,
                friends: response.data
            })
        })
        .catch((error)=>{
            dispatch({
                type: ERROR,
                errorNessage: error
            })
        })
    }
}

export const deleteFriend = (friend)=>{
    return (dispatch)=>{
        dispatch({type: FETCHING});
        axios.delete(`http://localhost:5000/api/friends/${friend.id}`)
        .then((response)=>{
            dispatch({
                type: SUCCESS,
                friends: response.data
            })
        })
        .catch((error)=>{
            dispatch({
                type: ERROR,
                errorMessage: error
            })
        })
    }
}