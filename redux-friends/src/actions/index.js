import axios from 'axios' 
export const SF = 'SAVING_FRIEND'
export const SDF = 'SAVED_FRIEND'

export const fetchingData = () => {
    const request = axios.get('http://localhost:5000/api/friends')
    return (dispatch) => {        
        dispatch({type:'FRIENDS_FETCHING'})
        request.then(response => {
            dispatch({type:'FRIENDS_FETCHED', payload: response.data})
        }).catch(err => {
            dispatch({type:'ERROR', payload: err})
        })
    }
}


export const savingFriend = friend => {
    
    return (dispatch) => {
        dispatch({type:SF})
        axios.post('http://localhost:5000/api/friends', friend)
        .then(response => {
            console.log(response.data);
            dispatch({type: SDF, payload: response.data})
        })
        .catch(err => {
            dispatch({type: 'ERROR', payload: err})
        })
    }
}

export const updateFriend = (friend, id) => {

    return (dispatch) => {
        dispatch({type:'UPDATING_FRIENDS'})
        axios.put(`http://localhost:5000/api/friends/${id}`, {name:friend.name, age: friend.age, email: friend.email})
        .then(response => {
            console.log(response.data)
            dispatch({type:'UPDATED_FRIENDS', payload:response.data})
        }).catch(err=>{
            console.log(err)
            dispatch({type:'ERROR', error: err})
        })
    }
}

export const deleteFriend = id => {
    return (dispatch) => {
        dispatch({type:'DELETING_FRIENDS'})
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            console.log(response.data)
            dispatch({type:'DELETED_FRIENDS', payload: response.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'ERROR', error:err})
        })
    }
}