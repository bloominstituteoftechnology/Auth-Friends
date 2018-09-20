const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [
    {
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com',
    }
  ],
  error: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}
