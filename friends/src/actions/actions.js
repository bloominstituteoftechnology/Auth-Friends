export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';


export const getFriends = () => {
    dispatch => {
        axios.get('http://localhost:5000/api/friends/get')
        .then()
        .catch()
    }
}

export const createFriend = () => {
    dispatch => {
        axios.post('http://localhost:5000/api/friends/create')
        .then()
        .catch()
    }
}

export const updateFriend = () => {
    dispatch => {
        axios.put(`http://localhost:5000/api/friends/update/${id}`)
    }
}


/* `**[GET]** /api/friends/get`
* `**[POST]** /api/friends/create`
* `**[UPDATE]** /api/friends/update`
* `**[DELETE]** /api/friends/delete` */
