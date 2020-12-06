export const GET_FRIENDS = "GET_FRIENDS";

export const getFriends = (friends) => {
  return {
    type: GET_FRIENDS,
    payload: friends,
  };
};
