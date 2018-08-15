export const FETCHING = 'FETCHING';

export const getFriends = () => {
  return function(dispatch){
    setTimeout(() => {
      dispatch({type: FETCHING, payload: "fetching request"});
    }, 1000)
  }
}
