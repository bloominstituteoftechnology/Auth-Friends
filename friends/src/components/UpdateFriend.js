import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function UpdateFriend() {

    putMessage = (id, updateFriend) => {
        axiosWithAuth()
        .put(`/api/friends/${id}`, updateFriend)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    putMessage = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Updating Friend Information</h1>
            <form>
                <input />
            </form>
        </div>
    )
}

export default UpdateFriend;