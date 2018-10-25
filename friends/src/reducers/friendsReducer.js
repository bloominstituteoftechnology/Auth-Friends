const initialState = {
    friends: [
        {
            id: 1,
            name: 'Joe',
            age: 24,
            email: 'joe@lambdaschool.com'
        }
    ]
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}