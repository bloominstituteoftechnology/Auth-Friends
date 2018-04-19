import store from './index';
export const ADD_TODO = 'ADD_TODO';



export const Add_todo = (value) => {
    return ({type: ADD_TODO, payload: value})
  };
