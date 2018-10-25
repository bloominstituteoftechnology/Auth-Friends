export const ADD_FRIEND = 'ADD_FRIEND';

export const addFriend = newFriend => {
    return {
        type: ADD_FRIEND,
        payload: newFriend
    };
};