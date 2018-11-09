import axios from "axios"

//action stype strings
export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAIL = "FAIL"

//GET
export const getFriends = () => {
   return dispatch => {
      dispatch({type: LOADING})
      axios.get(`http://localhost:5000/api/friends`)
         .then(response => {
            dispatch({
               type: SUCCESS,
               payload: response.data
            })
         })
         .catch(err => {
            dispatch({
               type: FAIL,
               error: "Error Loading Friends"
            })
         })
   }
}

//POST
export const createFriend = (newFriend) => {
   return dispatch => {
      dispatch({type: LOADING})
      axios.post(`http://localhost:5000/api/friends/`, newFriend)
         .then(response => {
            dispatch({
               type: SUCCESS,
               payload: response.data
            })
         })
         .catch(err => {
            dispatch({
               type: FAIL,
               error: "Error Creating New Friend"
            })
         })
   }
}

//PUT
export const updateFriend = (friend) => {
   return dispatch => {
      dispatch({type: LOADING})
      axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
         .then(response => {
            console.log(response)
         })
         .catch(err => {
            dispatch({
               type: FAIL,
               error: "Error Updating Friend Info"
            })
         })
   }
}

//DELETE