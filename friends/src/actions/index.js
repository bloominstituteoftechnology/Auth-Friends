import {axiosWithAuth} from '../Utils/axiosWithAuth'
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND'

export const fetchFriends = () => (dispatch) =>{
  dispatch({type: FETCH_FRIENDS})

  axiosWithAuth()
  .get('/api/friends')
  .then((res)=>{
      console.log(res.data)
      dispatch({type:FETCH_FRIENDS_SUCCESS, payload: res.data})
  })
}
// export const addFriend = () =>{
//     axiosWithAuth()
//     .post('/api/friends')
// }

// export const removeFriend = () => (dispatch) =>{
//     // console.log(friend);
//     return{
//         // type: REMOVE_FRIEND,
//         // payload: friend
//     }
// }

// export const editfriend = () => (dispatch) =>{
    // console.log(friend);
    // return{
        // type: EDIT_FRIEND,
        // payload: friend
    // }
// }