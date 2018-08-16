import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/friends'
});

export const getAction = () => {
    return function(dispatch) {
      dispatch({ type: GET_FRIENDS });
      axios.get(instance)
        .then(function(response){
             dispatch({type: GET_SUCCESS, payload: response.data })
        })
        .catch(function(error){
            console.log(error)
            dispatch({type: GET_FAILURE, error});
        })
    }
}