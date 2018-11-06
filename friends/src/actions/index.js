export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const fetchFriends = () => dispatch =>{
    dispatch({type:FETCHING_FRIENDS})
      axios
        .get('http://localhost:5000') 
            .then(response =>{
                dispatch({
                    type:SUCCESS,
                    payload : response.data.friends,
                })
            }) 
        .catch(err =>{
            dispatch({type: FAILURE, payload :err})
        })    
}

export const addFriend = (friend) =>{
    return{type : ADD_FRIEND, payload : friend}
}
export const deleteFriend = (id) =>{
    return{type :DELETE_FRIEND, payload : id}
}