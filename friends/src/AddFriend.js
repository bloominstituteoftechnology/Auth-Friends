import React from 'react'
import { Link } from 'react-router-dom'
import { Label } from 'reactstrap'

const AddFriend = props => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <p>Name</p>
                    <input value={props.name} onChange={props.function} className="form-control" type="text" name='name' />
                </div>
                <div className="form-group">
                    <p forHtml="exampleInputEmail1">Age</p>
                    <input value={props.age} onChange={props.function} className="form-control" type="number" name='age' />
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input value={props.email} onChange={props.function} className="form-control" s type="email" name='email' />
                </div>
                <Link to="/" onClick={props.function2} className="btn btn-primary">Add Friend!</Link>
            </form>
        </div>
    );
}

export default AddFriend;