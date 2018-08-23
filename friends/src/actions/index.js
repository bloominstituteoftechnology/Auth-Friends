import axios from 'axios';

const url = 'http://localhost:5000'

export const fetchingFriends = () => dispatch => {
    dispatch({ type: FETCHING })

    axios
}