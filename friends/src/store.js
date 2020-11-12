import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "friends",
	initialState: {
		loginStatus: false,
		token: "",
		friends: [],
	},
	reducers: {
		setLoginStatus: (state, action) => {
			state.loginStatus = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setFriends: (state, action) => {
			state.friends = action.payload;
		},
	},
});

export const store = configureStore({
	reducer: slice.reducer,
});

export const { setLoginStatus, setFriends, setToken } = slice.actions;
