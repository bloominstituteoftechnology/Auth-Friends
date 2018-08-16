import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/friends'
});

export const saveAction = (friend) => {
    return function(dispatch) {
      dispatch({ type: SAVE_FRIENDS });
      axios.post(instance, {
          name: friend.name,
          age: friend.age,
          email: friend.email          
      })
        .then(function(response){
             dispatch({type: SAVE_SUCCESS, payload: response.data })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: SAVE_FAILURE, error});
        })
    }
}