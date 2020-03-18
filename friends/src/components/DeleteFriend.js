import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";

class DeleteFriend extends React.Component{
    constructor(){
        super();
        this.state = { id: '' }
    }
    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/api/friends/${this.state.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    changeHandler = (event) => {
        this.setState( { id: event.target.value})
        console.log(this.state.id)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter an id"/>
                    <button>Delete Friend</button>
                </form>
            </div>
        )
    }
}



export default DeleteFriend