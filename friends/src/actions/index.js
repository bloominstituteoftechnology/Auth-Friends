import {
  get,
  post,
  delete as _delete
} from 'axios'

export const getFriends = () => async dispatch => {

  try {

    const {
      data: friends
    } = await get('http://localhost:5000/api/friends')

    dispatch({
      type: 'GET_FRIENDS',
      friends
    })

  } catch (e) {

    console.log('error:', e)

  }

}

export const addFriend = event => async dispatch => {
  event.preventDefault()
  const {
    name,
    age,
    email
  } = event.target.elements

  try {
    const {
      data: friends
    } = await post('http://localhost:5000/api/friends', {
      name: name.value,
      age: age.value,
      email: email.value
    })
    
    dispatch({
      type: 'ADD_FRIEND',
      friends
    })
  
  } catch (e) {
    console.log('error adding friends:', e)
  }
}

export const deleteFriend = id => async dispatch => {

  console.log('deleting friend: ' + id)

  try {
    const { 
      data: friends 
    } = await _delete(`http://localhost:5000/api/friends/${id}`) 

    dispatch({
      type: 'DELETE_FRIEND',
      friends
    })
  } catch(e) {
    console.log('error deleting friend:', e)
  }
}
