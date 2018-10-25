import { ADD_FRIEND } from '../actions/fetchingActions';
import { store } from '../index';

// const initialState = {
//     friends: []
//     //store.getState().friends
// };

console.log(store.getState());

export const addFriendReducer = (state = store.getState(), action) => {
    console.log('store', store);
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, {
                    name: action.payload.name,
                    age: action.payload.age,
                    email: action.payload.email,
                    id: action.payload.id
                }]
            };
        default:
            return state;
    }
};