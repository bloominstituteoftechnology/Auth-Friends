import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const ADDING_FRIEND = "ADDFRIEND";
export const ADDED_FRIEND = "ADDEDFRIEND";

export const DELETING_FRIEND = "DELETINGFRIEND";
export const DELETED_FRIEND = "DELETEDFRIEND";

export const EDITING_FRIEND = "EDITINGFRIEND";
export const EDITED_FRIEND = "EDITEDFRIEND";

export const getFriends = () => (dispatch) => {
	dispatch({ type: FETCHING });
	axios
		.get(`http://localhost:5000/api/friends`)
		.then((response) => {
			console.log(response);
			dispatch({ type: FETCHED, friends: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up getting friends" });
		});
};

export const addFriend = (friend) => (dispatch) => {
	dispatch({ type: ADDING_FRIEND });
	axios
		.post(`http://localhost:5000/api/friends`, friend)
		.then((response) => {
			dispatch({ type: ADDED_FRIEND, friends: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up adding friend" });
		});
};

export const deleteFriend = (id) => (dispatch) => {
	dispatch({ type: DELETING_FRIEND });
	axios
		.delete(`http://localhost:5000/api/friends/${id}`, id)
		.then((response) => {
			dispatch({ type: DELETED_FRIEND, friends: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up deleting friend" });
		});
};

export const editFriend = (id) => (dispatch) => {
	dispatch({ type: EDITED_FRIEND });
	axios
		.put(`http://localhost:5000/api/friends/${id}`, id)
		.then((response) => {
			dispatch({ type: EDITED_FRIEND, friends: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up editing friend" });
		});
};
