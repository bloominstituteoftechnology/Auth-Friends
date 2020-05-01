import React from "React";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const deleteFriend = props => {


    function handleSubmit(e) {
        e.preventDefault();
        axiosWithAuth().delete(`api/friends/${this.state.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(error)
            })
    }

    return(
        <div>
            <h2>Delete Friend</h2>
        </div>
    )

}

export default deleteFriend;