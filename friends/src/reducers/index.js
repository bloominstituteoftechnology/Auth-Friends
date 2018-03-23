import {ADD} from '../actions';

const defaultState = {
  friends:[]
}

function modifyFriends(state=[],action){
  switch(action.type){
    case ADD:
      return [
                ...state,{
                name:action.name,
                age:action.age,
                email:action.email,
                id:action.id
              }
              ];
    default:
      return [];
  }
}
export default (state=defaultState,action) =>{
  switch(action.type){
    case ADD:
      return Object.assign({}, state, {
        friends: modifyFriends(state.friends,action)
      });
    default:
     return state; 
  }

}
