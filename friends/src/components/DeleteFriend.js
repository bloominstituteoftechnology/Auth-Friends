import React from "react"
import { axiosWithAuth } from "../Utilities/axiosWithAuth";

class DeleteFriend extends React.Component{

    constructor(){
        super();
        this.state = { id: '', deletedFriend: '' }
    }

    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/api/friends/${this.state.id}`)
        .then(res => {
            console.log(res)
            alert(`Deleted friend with id: ${this.state.id}`);
        })
        .catch(err => console.log(err))
    }

    changeHandler = (event) => {
        this.setState( { id: event.target.value})
        console.log(this.state.id)
    }

    render(){
        return(

            <div className="DeleteFriend">
                <h2>Delete Friend :(</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter an id"/>
                    <button>Delete Friend</button>
                </form>
            </div>

        )
    }

}

export default DeleteFriend