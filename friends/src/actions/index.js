import axios from 'axios';
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERRORS = 'ERROS';

export const getFriends = ()=> {
  const promise = axios.get(`http://localhost:5000/api/friends`);
return (dispatch) => {
  dispatch({ type: PENDING });
  promise
    .then(response => {
      console.log('response ' ,response);
      dispatch({ type: SUCCESS, payload: response.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERRORS });
    });
};

};

export const updateFriend = (friend)=> {
      const promise = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend);

      return (dispatch) => {
      dispatch({ type: PENDING });
      promise
        .then(response => {
          console.log('response from updateFriendAction' ,response);
          dispatch({ type: SUCCESS, payload: response.data});
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERRORS });
        });
    };
}
