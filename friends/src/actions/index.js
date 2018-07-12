import { get } from 'axios'

export const getFriends = () => async dispatch => {
 
  try {
    
    const { data: friends } = await get('http://localhost:5000/api/friends')
    dispatch({ type: 'ADD_FRIENDS', friends })

  } catch(e) {

    console.log('error:', e)

  }

}

