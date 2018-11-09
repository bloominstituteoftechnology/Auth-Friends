import {LOADING, SUCCESS, ERROR} from './actionTypes'
import axios from 'axios'
//fetchFriends Action Creator

const fetchFriends = () =>{
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

export default fetchFriends
