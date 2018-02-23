import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const loadFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get'); 
       return dispatch => {
           dispatch({ type: IS_FETCHING });
           friends
             .then(({ data }) => {
                 dispatch({ type: FRIENDS_FETCHED, payload: data.message });
             })
             .catch(err => {
                dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
        });
    };   
    // .then(response => { 
    //         this.setState({ 
    //         friends: response.data, 
    //         }); 
    //       }) 
    //       .catch(() => { 
    //         console.error('error getting data'); 
    //     }); 
}; 


// export const NEW_FRIEND = 'NEW_FRIEND';

// export const newFriend = (friend) => {
//     return {
//         type: NEW_FRIEND,
//         payload: friend
//     };
// };