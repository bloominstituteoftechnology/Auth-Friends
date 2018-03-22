import {ADD} from '../actions';

const defaultState = {
  friends:[]
}


export default (state=defaultState,action) =>{
  switch(action.type){
    case ADD:
      return Object.assign({},state,{
        friends:[...state.friends,{
          name:action.name,
          age:action.age,
          email:action.email,
          id:action.id
        }]
      });
    default:
     return state; 
  }

}
