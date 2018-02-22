export const NEW_FRIEND = 'NEW_FRIEND';

export const newFriend = (friend) => {
    return {
        type: NEW_FRIEND,
        payload: friend
    };
};