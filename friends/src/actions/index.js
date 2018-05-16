import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS'

export const getFriends = () => {
    const request = axios.get('http://localhost:5000/friends')
    return (dispatch) => {
        console.log(dispatch)
        dispatch({type: FETCHING_FRIENDS})
        request.then(({friends}) => {
          dispatch({type: FETCHED_FRIENDS, friends});
        })
        .catch(err => {
            console.log(err);
        });
      };
}