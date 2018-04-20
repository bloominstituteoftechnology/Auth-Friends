import axios from "axios";
import { FRIENDS_ERROR, FRIENDS_FETCHED} from './actions';
import { friendsActionCreator} from './actions';


  const createNewFriend = (data) =>{
    const obj= { name:data.friend}
      const newFriends = axios.post('http://localhost:5000/api/friends/', obj)

    return (dispatch)=> {
      
         newFriends.then(res =>{
             console.log('g',res)
             dispatch(friendsActionCreator())}
                        )
                    .catch( error=> {
                            dispatch({
                                type: FRIENDS_ERROR,
                                payload: " error in adding new friend"
                            })
                    })

    }

  }
export default createNewFriend;