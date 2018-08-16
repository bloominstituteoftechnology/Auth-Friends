import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/friends'
});

export const delAction = (friend) => {
    return function(dispatch) {
      dispatch({ type: SAVE_FRIENDS });
      axios.delete(instance/`${friend.id}`)       
        .then(function(response){
             dispatch({type: SAVE_SUCCESS, payload: response.data })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: SAVE_FAILURE, error});
        })
    }
}