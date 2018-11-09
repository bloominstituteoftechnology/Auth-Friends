import {LOADING, SUCCESS, ERROR} from './actionTypes'
import axios from 'axios'
//fetchFriends Action Creator

const fetchFriends = () =>{
    return (dispatch) =>{
        dispatch({type: LOADING})
        axios.get('/api/friends')
            .then(console.log(response))
            .catch(err =>{
                dispatch({type: ERROR, payload: "Unable to retrieve Friends data"})
            })
    }
}
