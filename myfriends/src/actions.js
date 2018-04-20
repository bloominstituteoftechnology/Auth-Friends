import axios from 'axios';
export   const FRIENDS_FETCHING = ' FRIENDS_FETCHING';
export  const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export  const FRIENDS_ERROR = 'FRIENDS_ERROR';




const friendsActionCreator = ( ) => {

     const friends = axios.get('http://localhost:5000/api/friends/');
      

return (dispatch) => {
                       dispatch({ type: FRIENDS_FETCHING })

        friends.then ( res =>{ 
                             
                      dispatch({ type:FRIENDS_FETCHED, payload:res.data}
                    )})

               .catch( error => {
                          
                         dispatch({type: FRIENDS_ERROR })
                                                                  })
     }

}
export  {friendsActionCreator};