import React from "React";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const addFriend = props => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const addFriend = props => {
        axiosWithAuth()
        .post(
            "/api/friends", props
            )
        .then(
            res => {
                console.log(res)
            })
        .catch(
            error => 
                console.log(error)
        )
    }

    function handleChange(e) {
        setFriend({
            ...friend,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        addFriend(friend);
        setFriend({
            name: "",
            age: "",
            email: ""
        })
    }

    return(
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>

                <h3>Name</h3>
                <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={props.name} />

                <h3>Age</h3>
                <input type="text" placeholder="Enter Age" name="age" onChange={handleChange} value={props.age} />

                <h3>Email</h3>
                <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} value={props.email} />

                <button>Add Friend</button>
            </form>
        </div>
    )

}

export default addFriend;