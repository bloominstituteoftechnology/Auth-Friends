import axios from 'axios'; 

export const fetchingData = () => {
    const request = axios.get('http://localhost:5000/api/friends'); 
    return (dispatch) => {
        dispatch({type: "FETCHING_FRIENDS"})
        request.then(({data}) => {
            
            dispatch({type: "FRIENDS_FETCHED",  payload: data})
        }).catch((err) => {
            dispatch({type: "ERROR", payload: err})
        })
    }
};

export const savingFriends = (newFriend) => {
    const request = axios.post('http://localhost:5000/api/friends', newFriend); 
    return(dispatch) => {
        dispatch({type: "SAVING_FRIENDS"})
        request.then(({data}) => {
            dispatch({type: 'FRIENDS_SAVED', payload: data})
        }).catch((err) => {
            dispatch({type: 'ERROR', payload: err})
        })
    }
}

