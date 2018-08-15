export const FETCHING = 'FETCHING';

export const getFriends = () => {
  return function(dispatch){
    dispatch({type: FETCHING, payload: "fetching request"});
  }
}
