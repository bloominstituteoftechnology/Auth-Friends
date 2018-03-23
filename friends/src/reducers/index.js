import {ADD,REQUEST_FRIENDS,RECEIVE_FRIENDS} from '../actions';

const defaultState = {
  fetching: false,
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
    case REQUEST_FRIENDS:
      return Object.assign({},state,{
        fetching:true
      });
    case RECEIVE_FRIENDS:
      return Object.assign({},state,{
        fetching:false
      });

    default:
     return state; 
  }

}
