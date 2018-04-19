// import { combineReducers } from 'redux';
// import { charsReducer } from './starWarsReducer';
//
// export default combineReducers({
//   chars: charsReducer
// });


export const reducer = (state, action)=> {

return {
    friends: [
      {
        id: 1,
        name: "Joe",
        age: 24,
        email: "joe@lambdaschool.com",
      }
    ]
  }
};
