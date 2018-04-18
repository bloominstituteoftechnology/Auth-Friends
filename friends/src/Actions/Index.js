import axios from 'axios'

export const 
 ADD = 'ADD',
 ADDED = 'ADDED',
 UPDATE = 'UPDATE',
 UPDATED = 'UPDATED',
 DELETE = 'DELETE',
 DELETED = 'DELETED',
 FETCH = 'FETCH',
 FETCHED = 'FETCHED'
 ERROR = 'ERROR';

 export const Friends = () => dispatch => {
     dispatch({ type= Fetch});
     axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            dispatch({ type: FETCHED, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: Error, errorMessage: 'You Have No Friends'})
        });
 };

 export const addFriend = (newFriend) => dispatch => {
     dispatch({ type: Adding });
     axios
        .post(`http://localhost:5000/api/friens`, newFriend)
        .then(response => {
            dispatch({ type: ADDED, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Cant Add Friends that Arent There'})
        });
 };

 export const updateFriend = (id, friend) => dispatch => {
     dispatch({ type: UPDATE});
     axios
        .put(`http://:localhost:5000/api/friends/${id}`, friend )
        .then(response => {
            dispatch({ type: UPDATED, friends: response.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'No Friends to Update'})
        });
 };

 export const deleteFriend = (id) => dispatch => {
     dispatch({ type: DELETE });
     axios 
        .delete(`http://:localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: DELETED, friends: response.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'No Friends to Delete'})
        });
};