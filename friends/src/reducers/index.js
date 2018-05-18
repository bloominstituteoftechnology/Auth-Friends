export const ADD_FRIEND = 'ADD_FRIEND'; //create (post)
export const FETCH_FRIEND = 'FETCH_FRIEND'; //read (get)
export const UPDATE_FRIEND = 'UPDATE_FRIEND'; //update (put)
export const REMOVE_FRIEND = 'REMOVE_FRIEND'; //destroy (delete)



const shinyReducer = (state, action) =>{
    switch (action.type){
        case ADD_FRIEND:
            return Object.assign({}, state, state.friends.concat(action.payload));
        case FETCH_FRIEND:
            return Object.assign({}, state);
        case REMOVE_FRIEND:
            return Object.assign({}, state, friends.slice(0, index).concat(friends.slice(index, (friends.length-1))));
        default:
            return state;
    }
    
};

export default shinyReducer;