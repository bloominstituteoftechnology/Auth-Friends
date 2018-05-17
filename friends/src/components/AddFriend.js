import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions'


const AddFriend = props => {
    return (
        <div>
            <form onSubmit={(event) => { props.addFriend(this.input.value); event.preventDefault(); this.input.value = ''}}>
                    <input type="text" ref={(input) => this.input = input} />
                <input type="submit" value="Add Friend" />
            </form>
        </div>
    )
}

export default connect(null, { addFriend })(AddFriend)
